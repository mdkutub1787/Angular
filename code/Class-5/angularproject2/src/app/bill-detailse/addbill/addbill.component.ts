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
  bills: BillModel[] = [];
  billForm!: FormGroup;
  bill: BillModel = new BillModel();

  constructor(
    private billService: BillService,
    private policiesService:PolicyService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }
  ngOnInit(): void {
    this.loadPolicy();

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
      .subscribe(name => {

        const selectedLocation = this.policies.find(loc => loc.policyholder === name);

        if (selectedLocation) {
          this.billForm.patchValue({ policies: selectedLocation });

        }

      });
    // this.billForm.get('policies')?.get('sumInsured')?.valueChanges
    //   .subscribe(name => {

    //     const selectedLocations = this.policies.find(pol => pol.sumInsured === name);

    //     if (selectedLocations) {
    //       this.billForm.patchValue({ policies: selectedLocations });

    //     }

    //   });
  }
  loadPolicy() {
    this.policiesService.viewAllPolicyForBill()
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
    this.bill.netPremium = this.billForm.value.netPremium;
    this.bill.tax = this.billForm.value.tax;
    this.bill.grossPremium = this.billForm.value.grossPremium;
    this.bill.policies.policyholder = this.billForm.value.policies.policyholder;
    this.bill.policies.sumInsured = this.billForm.value.policies.sumInsured;


    this.billService.createBill(this.bill)
      .subscribe({

        next: res => {
          this.loadPolicy();
          this.billForm.reset();
          this.router.navigate(['viewbill']);
        },
        error: error => {
          console.log(error);
        }

      });
  }

}
