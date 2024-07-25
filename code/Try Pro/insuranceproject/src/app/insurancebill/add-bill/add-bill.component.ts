import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InsuranceService } from '../../service/insurance.service';
import { Root } from '../../model/bill.model';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrl: './add-bill.component.css'
})
export class AddBillComponent  {
  billForm!: FormGroup;

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService) {
    this.billForm = this.fb.group({
      billNo: [''],
      date: [''],
      insured: this.fb.group({
        name: [''],
        policyholder: [''],
        address: ['']
      }),
      sumInsured: [0],
      stockInsured: [''],
      interestInsured: [''],
      situation: this.fb.group({
        location: [''],
        construction: [''],
        usedAs: [''],
        owner: ['']
      }),
      period: this.fb.group({
        from: [''],
        to: ['']
      }),
      premium: this.fb.group({
        rate: [0],
        firePremium: [0],
        vat: [0],
        grossPremium: [0]
      })
    });
  }


  addbill(): void {
    const bill: Root = this.billForm.value;
    this.insuranceService.addBill(bill).subscribe(() => {
      this.billForm.reset();
    });
  }
}