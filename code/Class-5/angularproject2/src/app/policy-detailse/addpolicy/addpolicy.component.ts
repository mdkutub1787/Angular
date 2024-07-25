import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PolicyModel } from '../../model/policy.model';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrl: './addpolicy.component.css'
})
export class AddpolicyComponent implements OnInit {
  formValue!: FormGroup;
  policy: PolicyModel = new PolicyModel();
  policyData: any;

  constructor(
    private policyService: PolicyService,
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      billNo: [''],
      date: [''],
      bankName: [''],
      policyholder: [''],
      address: [''],
      sumInsured: [''],
      stockInsured: [''],
      interestInsured: [''],
      usedAs: [''],
    });
  }

  createPolicy() {
    this.policy.billNo = this.formValue.value.billNo;
    this.policy.date = this.formValue.value.date;
    this.policy.bankName = this.formValue.value.bankName;
    this.policy.policyholder = this.formValue.value.policyholder;
    this.policy.address = this.formValue.value.address;
    this.policy.sumInsured = this.formValue.value.sumInsured;
    this.policy.stockInsured = this.formValue.value.stockInsured;
    this.policy.interestInsured = this.formValue.value.interestInsured;
    this.policy.usedAs = this.formValue.value.usedAs;


    this.policyService.createPolicy(this.policy)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewpolicy']);
        },
        error: err => {
          console.log(err)
        }
      });


  }

}
