import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrl: './add-bill.component.css'
})
export class AddBillComponent {
  billForm!: FormGroup;
  submitted = false;
  billData: any;


  constructor(private fb: FormBuilder, private router: Router) {
    this.billForm = this.fb.group({
      billNo: [''],
      date: [''],
      insured: this.fb.group({
        name: [''],
        policyholder: [''],
        address: ['']
      }),
      stockInsured: [''],
      sumInsured: [''],
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
        rate: [''],
        firePremium: [''],
        vat: [''],
        grossPremium: ['']
      })
    });
  }

  addBill() {
    if (this.billForm.valid) {
      this.billData = this.billForm.value;
      this.submitted = true;
      this.router.navigate(['/getBill']);

    }
  }
}