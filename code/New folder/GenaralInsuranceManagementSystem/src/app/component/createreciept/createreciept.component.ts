import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReceiptModel } from '../../model/reciept.model';
import { PolicyModel } from '../../model/policy.model';
import { RecieptService } from '../../service/reciept.service';
import { PolicyService } from '../../service/policy.service';
import { Router } from '@angular/router';
import { BillModel } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-createreciept',
  templateUrl: './createreciept.component.html',
  styleUrls: ['./createreciept.component.css']
})
export class CreaterecieptComponent implements OnInit {

  receiptForm!: FormGroup;
  policies: PolicyModel[] = [];
  bills: BillModel[] = [];

  constructor(
    private receiptService: RecieptService,
    private policyService: PolicyService,
    private billService: BillService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPoliciesAndBills();

    this.receiptForm = this.formBuilder.group({
      id: [''],
      bill: this.formBuilder.group({
        fire: [0, Validators.required],
        rsd: [0, Validators.required],
        netPremium: [0, Validators.required],
        tax: [0, Validators.required],
        grossPremium: [0, Validators.required],
        policies: this.formBuilder.group({
          billNo: [undefined, Validators.required],
          date: [undefined, Validators.required],
          policyholder: [undefined, Validators.required],
          bankName: [undefined, Validators.required],
          address: [undefined],
          stockInsured: [undefined],
          sumInsured: [undefined],
          interestInsured: [undefined],
          coverage: [undefined],
          location: [undefined],
          construction: [undefined],
          owner: [undefined],
          usedAs: [undefined],
          periodFrom: [undefined],
          periodTo: [undefined]
        })
      })
    });

    // Subscribe to policyholder value changes
    this.receiptForm.get('bill.policies.policyholder')?.valueChanges.pipe(untilDestroyed(this)).subscribe(policyholder => {
      const selectedPolicy = this.policies.find(policy => policy.policyholder === policyholder);
      if (selectedPolicy) {
        this.updateFormValuesWithPolicy(selectedPolicy);
      }
    });

    this.receiptForm.get('bill.fire')?.valueChanges.pipe(untilDestroyed(this)).subscribe(() => this.calculatePremiums());
    this.receiptForm.get('bill.rsd')?.valueChanges.pipe(untilDestroyed(this)).subscribe(() => this.calculatePremiums());
    this.receiptForm.get('bill.tax')?.valueChanges.pipe(untilDestroyed(this)).subscribe(() => this.calculatePremiums());
  }

  loadPoliciesAndBills(): void {
    this.policyService.viewAllPolicyForBill().pipe(untilDestroyed(this)).subscribe({
      next: res => {
        this.policies = res;
      },
      error: error => {
        console.error('Error loading policies:', error);
        // Handle the error appropriately here
      }
    });

    this.billService.getAllBillForReciept().pipe(untilDestroyed(this)).subscribe({
      next: res => {
        this.bills = res;
      },
      error: error => {
        console.error('Error loading bills:', error);
        // Handle the error appropriately here
      }
    });
  }

  updateFormValuesWithPolicy(policy: PolicyModel): void {
    this.receiptForm.get('bill.policies')?.patchValue({
      bankName: policy.bankName,
      address: policy.address,
      stockInsured: policy.stockInsured,
      sumInsured: policy.sumInsured,
      interestInsured: policy.interestInsured,
      coverage: policy.coverage,
      location: policy.location,
      construction: policy.construction,
      owner: policy.owner,
      usedAs: policy.usedAs,
      periodFrom: policy.periodFrom,
      periodTo: policy.periodTo
    }, { emitEvent: false });
    this.calculatePremiums(); // Calculate premiums after updating the policy values
  }

  calculatePremiums(): void {
    const formValues = this.receiptForm.get('bill')?.value;
    const sumInsured = formValues.policies?.sumInsured || 0;
    const fireRate = formValues.fire || 0;
    const rsdRate = formValues.rsd || 0;
    const taxRate = formValues.tax || 0;

    const netPremium = (sumInsured * fireRate + sumInsured * rsdRate);
    const grossPremium = netPremium + (netPremium * taxRate / 100);

    this.receiptForm.get('bill')?.patchValue({
      netPremium: netPremium,
      grossPremium: grossPremium
    }, { emitEvent: false });
  }

  createReceipt(): void {
    if (this.receiptForm.valid) {
      const formValues = this.receiptForm.value;
      const receipt: ReceiptModel = {
        id: formValues.id,
        bill: formValues.bill
      };
  
      this.receiptService.createReceipt(receipt).pipe(untilDestroyed(this)).subscribe({
        next: res => {
          this.receiptForm.reset();
          this.router.navigate(['/viewreceipt']);
        },
        error: error => {
          console.error('Error creating receipt:', error);
          // Handle the error appropriately here
        }
      });
    } else {
      this.displayFormErrors(); // Custom method to display errors
      console.warn('Form is invalid');
    }
  }
  
  displayFormErrors(): void {
    Object.keys(this.receiptForm.controls).forEach(key => {
      const control = this.receiptForm.get(key);
      if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach(subKey => {
          const subControl = control.get(subKey);
          if (subControl && subControl.invalid) {
            console.error(`Field ${subKey} is invalid`);
          }
        });
      } else if (control && control.invalid) {
        console.error(`Field ${key} is invalid`);
      }
    });
  }
}  