import { Component, OnInit } from '@angular/core';
import { BillModel } from '../../model/bill.model';
import { PolicyModel } from '../../model/policy.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PolicyService } from '../../service/policy.service';
import { BillService } from '../../service/bill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebill',
  templateUrl: './updatebill.component.html',
  styleUrl: './updatebill.component.css'
})
export class UpdatebillComponent implements OnInit {
  bill: BillModel = new BillModel();
  policies: PolicyModel[] = [];
  billId: string = "";
  billForm!: FormGroup;

  constructor(
    private policiesService: PolicyService,
    private billService: BillService,
    private fromBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.billId = this.route.snapshot.params['id'];
    console.log(this.billId);
    this.billForm = this.fromBuilder.group({
      fire: [''],
      rsd: [''],
      netPremium: [''],
      tax: [''],
      grossPremium: [''],

      policies: this.fromBuilder.group({
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
    this.loadBill();
    this.loadBillDetails();

  }

  loadBill(): void {
    this.policiesService.viewAllPolicyForBill()
      .subscribe({
        next: (res: PolicyModel[]) => {
          this.policies = res;

        },

        error: er => {
          console.log(er);

        }
      });

  }
  loadBillDetails(): void {
    this.billService.getByBillId(this.billId)
      .subscribe({
        next: (bill: BillModel) => {
          this.bill = bill;
          this.billForm.patchValue({
            fire: bill.fire,
            rsd: bill.rsd,
            netPremium: bill.netPremium,
            tax: bill.tax,
            grossPremium: bill.grossPremium,
            policies: bill.policies,

          });
        },

        error: error => {
          console.log(error);
        }
      });
  }

  updateBill(): void {
    const updateBill: BillModel = {

      ...this.bill,
      ...this.billForm.value

    };

    this.billService.updateBill(updateBill)
      .subscribe({
        next: res => {

          console.log('bill update successfully:', res);
          this.billForm.reset();
          this.router.navigate(['viewbill']);
        },
        error: error => {

          console.log('Error updating bill:', error);
        }

      });

  }

}
