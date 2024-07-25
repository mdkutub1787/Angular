import { Component, OnInit } from '@angular/core';
import { Policies } from '../model/policies.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PoliciesService } from '../policies-service/policies.service';

@Component({
  selector: 'app-createpolicies',
  templateUrl: './createpolicies.component.html',
  styleUrl: './createpolicies.component.css'
})
export class CreatepoliciesComponent implements OnInit {

  policies: Policies = new Policies();
  formValue!: FormGroup;
  policiesData: any;

  constructor(
    private policiesService: PoliciesService,
    private http: HttpClient,
    private router: Router,
    private fromBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formValue = this.fromBuilder.group({
      policyNumber: [''],
      bankName: [''],
      branchName: [''],
      shopName: [''],
      proprietorName: [''],
      address: [''],
      sumInsured: [''],

    });

  }
  createPolicies() {
    this.policies.policyNumber = this.formValue.value.policyNumber;
    this.policies.bankName = this.formValue.value.bankName;
    this.policies.branchName = this.formValue.value.branchName;
    this.policies.shopName = this.formValue.value.shopName;
    this.policies.proprietorName = this.formValue.value.proprietorName;
    this.policies.address = this.formValue.value.address;
    this.policies.sumInsured = this.formValue.value.sumInsured;

    this.policiesService.createPolicies(this.policies)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset;
          this.router.navigate(['/viewpolicies']);
        },
        error: error => {
          console.log(error);
        }
      });


  }

}
