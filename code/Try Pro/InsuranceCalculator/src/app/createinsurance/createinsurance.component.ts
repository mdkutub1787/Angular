import { Component, OnInit } from '@angular/core';
import { Policies } from '../model/insurance.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createinsurance',
  templateUrl: './createinsurance.component.html',
  styleUrl: './createinsurance.component.css'
})
export class CreateinsuranceComponent implements OnInit {

  insurance: Policies = new Policies();
  formValue!: FormGroup;
  insuranceData: any;

  constructor(
    private insuranceService: InsuranceService,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      policyNumber: (['']),
      bankName: (['']),
      branchName: (['']),
      shopName: (['']),
      proprietorName: (['']),
      address: (['']),
      sumInsured: (['']),

    });
  }

  createInsurance() {
    this.insurance.policyNumber = this.formValue.value.policyNumber;
    this.insurance.bankName = this.formValue.value.bankName;
    this.insurance.branchName = this.formValue.value.branchName;
    this.insurance.shopName = this.formValue.value.shopName;
    this.insurance.proprietorName = this.formValue.value.proprietorName;
    this.insurance.address = this.formValue.value.address;
    this.insurance.sumInsured = this.formValue.value.sumInsured;

    this.insuranceService.createInsurance(this.insurance)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset;
          this.router.navigate(['/insurance'])
        },
        error: error => {
          console.log(error);
        }
      });
  }


}
