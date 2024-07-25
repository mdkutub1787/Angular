import { Component, OnInit } from '@angular/core';
import { Policies } from '../../policies/model/policies.model';
import { BillModel } from '../bill-model/bill-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BillService } from '../bill-service/bill.service';
import { PoliciesService } from '../../policies/policies-service/policies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbill',
  templateUrl: './createbill.component.html',
  styleUrl: './createbill.component.css'
})
export class CreatebillComponent implements OnInit {

  policies: Policies[] = [];
  bills: BillModel[] = [];
  billForm!: FormGroup;
  bill: BillModel = new BillModel();

  constructor(
    private billService: BillService,
    private policiesService: PoliciesService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.loadPolicies();
    this.billForm = this.formBuilder.group({
      fire: [''],
      rsd: [''],
      netpremium: [''],
      tax: [''],
      grosspremium: [''],

      policies: this.formBuilder.group({
        id: [undefined],
        policyNumber: [undefined],
        bankName: [undefined],
        branchName: [undefined],
        shopName: [undefined],
        proprietorName: [undefined],
        address: [undefined],
        sumInsured: [undefined]
      })

    });

    this.billForm.get('policies')?.get('shopName')?.valueChanges
      .subscribe(name => {

        const selectedPolicies = this.policies.find(loc => loc.shopName === name);

        if (selectedPolicies) {
          this.billForm.patchValue({ policies: selectedPolicies });

        }

      });

  }

  loadPolicies() {
    this.policiesService.getAllPoliciesForBill()
      .subscribe({
        next: res => {
          this.policies = res;
        },
        error: error => {
          console.log(error);

        }
      })

  }

  createBill() {

    this.bill.fire = this.billForm.value.fire;
    this.bill.rsd = this.billForm.value.rsd;
    this.bill.netpremium = this.billForm.value.netpremium;
    this.bill.tax = this.billForm.value.tax;
    this.bill.grosspremium = this.billForm.value.grosspremium;
    this.bill.policies = this.billForm.value.policies;


    this.billService.createBill(this.bill)
      .subscribe({

        next: res => {
          this.loadPolicies();
          this.billForm.reset();
          this.router.navigate(['viewbill']);
        },
        error: error => {
          console.log(error);
        }

      });
  }


}
