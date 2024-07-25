import { Component, OnInit } from '@angular/core';
import { Policies } from '../model/policies.model';
import { PoliciesService } from '../policies-service/policies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepolicies',
  templateUrl: './updatepolicies.component.html',
  styleUrl: './updatepolicies.component.css'
})
export class UpdatepoliciesComponent implements OnInit {

  policies: Policies = new Policies();
  id: string = "";

  constructor(
    private policiesService: PoliciesService,
    private router: Router,
    private route: ActivatedRoute

  ) { }
  ngOnInit(): void {
    this.policies = new Policies();
    this.id = this.route.snapshot.params['id'];
    this.policiesService.getById(this.id)
      .subscribe({
        next: res => {
          console.log(res);
          this.policies = res;

        },

        error: err => {
          console.log(err);
        }
      });

  }

  updatePolicies() {

    this.policiesService.updatePolicies(this.id, this.policies)
      .subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/viewpolicies']);
        },

        error: err => {
          console.log(err);
        }

      });
  }

}




