import { Component, OnInit } from '@angular/core';
import { PoliciesService } from '../policies-service/policies.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewpolicies',
  templateUrl: './viewpolicies.component.html',
  styleUrl: './viewpolicies.component.css'
})
export class ViewpoliciesComponent implements OnInit {

  policiess: any;

  constructor(
    private policiesService: PoliciesService,
    private router: Router,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
    this.policiess = this.policiesService.getAllPolicies();

  }

  deletePolicies(id: string) {
    this.policiesService.deletePolicies(id)
      .subscribe({
        next: res => {
          this.policiess = this.policiesService.getAllPolicies();
          this.router.navigate(['viewpolicies'])
        }
      });
  }

  updatePolicies(id: string) {
    this.router.navigate(['/updatepolicies', id]);
  }
}
