import { Component, OnInit } from '@angular/core';
import { PolicyModel } from '../../model/policy.model';
import { BillModel } from '../../model/bill.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BillService } from '../../service/bill.service';
import { PolicyService } from '../../service/policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrl: './addbill.component.css'
})
export class AddbillComponent implements OnInit {

  policies: PolicyModel[] = [];
  billForm!: FormGroup;
  bill: BillModel = new BillModel();

  constructor(
    private billService: BillService,
    private policyService: PolicyService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPolicies();

    this.billForm = this.formBuilder.group({
      fire: [''],
      rsd: [''],
      netPremium: [''],
      tax: [''],
      grossPremium: [''],
      policies: this.formBuilder.group({
        id: [undefined],
        billNo: [undefined],
        date: [undefined],
        bankName: [undefined],
        policyholder: [undefined],
        address: [undefined],
        sumInsured: [undefined],
        stockInsured: [undefined],
        interestInsured: [undefined],
        usedAs: [undefined],
      })
    });

    this.billForm.get('policies')?.get('policyholder')?.valueChanges
      .subscribe(policyholder => {
        const selectedPolicy = this.policies.find(policy => policy.policyholder === policyholder);
        if (selectedPolicy) {
          this.billForm.get('policies')?.patchValue(selectedPolicy);
        }
      });
  }

  loadPolicies(): void {
    this.policyService.viewAllPolicyForBill()
      .subscribe({
        next: res => {
          this.policies = res;
        },
        error: error => {
          console.error('Error loading policies:', error);
        }
      });
  }

  createBill(): void {
    const formValues = this.billForm.value;

    this.bill.fire = formValues.fire;
    this.bill.rsd = formValues.rsd;
    this.bill.netPremium = formValues.netPremium;
    this.bill.tax = formValues.tax;
    this.bill.grossPremium = formValues.grossPremium;
    this.bill.policies = formValues.policies;

    this.billService.createBill(this.bill)
      .subscribe({
        next: res => {
          this.loadPolicies();
          this.billForm.reset();
          this.router.navigate(['viewbill']);
        },
        error: error => {
          console.error('Error creating bill:', error);
        }
      });
  }
}
