import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PolicyModel } from '../../model/policy.model';

@Component({
  selector: 'app-updatepolicy',
  templateUrl: './updatepolicy.component.html',
  styleUrl: './updatepolicy.component.css'
})
export class UpdatepolicyComponent implements OnInit {

  policy: PolicyModel = new PolicyModel();
  id: string = "";

  constructor(
    private policyService: PolicyService,
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute

  ) { }


  ngOnInit(): void {
    this.policy = new PolicyModel();
    this.id = this.route.snapshot.params['id'];
    this.policyService.getByPolicyId(this.id)
      .subscribe({
        next: res => {
          console.log(res);
          this.policy = res;
        },
        error: error => {
          console.log(error);
        }
      });
  }

  updatePolicy() {
    this.policyService.updatePolicy(this.id, this.policy)
      .subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/viewpolicy']);

        },

        error: error => {
          console.log(error);

        }
      });

  }



}
