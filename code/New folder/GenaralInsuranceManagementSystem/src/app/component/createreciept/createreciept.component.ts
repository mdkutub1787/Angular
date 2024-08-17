import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceiptModel } from '../../model/reciept.model';
import { PolicyModel } from '../../model/policy.model';
import { RecieptService } from '../../service/reciept.service';
import { PolicyService } from '../../service/policy.service';
import { Router } from '@angular/router';
import { BillModel } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';

@Component({
  selector: 'app-createreciept',
  templateUrl: './createreciept.component.html',
  styleUrl: './createreciept.component.css'
})
export class CreaterecieptComponent implements OnInit{

  receiptForm!: FormGroup;
  receipt: ReceiptModel = new ReceiptModel();
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
        fire: [0],
        rsd: [0],
        netPremium: [0], 
        tax: [0],
        grossPremium: [0], 
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
      })
    });

    // Subscribe to policyholder value changes
    this.receiptForm.get('bill')?.get('policies')?.get('policyholder')?.valueChanges.subscribe(policyholder => {
      console.log('Policyholder changed:', policyholder);
      const selectedPolicy = this.policies.find(policy => policy.policyholder === policyholder);
      if (selectedPolicy) {
        console.log('Selected Policy:', selectedPolicy);
        this.receiptForm.get('bill')?.get('policies')?.patchValue({
          bankName: selectedPolicy.bankName
        }, { emitEvent: false });
      }
    });
  }

  loadPoliciesAndBills(): void {
    this.policyService.viewAllPolicyForBill().subscribe({
      next: res => {
        this.policies = res;
      },
      error: error => {
        console.error('Error loading policies:', error);
      }
    });

    this.billService.getAllBillForReciept().subscribe({
      next: res => {
        this.bills = res;
      },
      error: error => {
        console.error('Error loading bills:', error);
      }
    });
  }

  createReceipt(): void {
    const formValues = this.receiptForm.value;

    this.receipt.id = formValues.id;
    this.receipt.bill = formValues.bill; 
    this.receiptService.createReceipt(this.receipt).subscribe({
      next: res => {
        this.receiptForm.reset();
        this.router.navigate(['/viewreceipt']);
      },
      error: error => {
        console.error('Error creating receipt:', error);
      }
    });
  }
}