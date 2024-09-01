import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { Router } from '@angular/router';
import { PolicyModel } from '../../model/policy.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  policies: PolicyModel[] = [];
  searchQuery: string = '';

  constructor(
    private policyService: PolicyService,
    private http:HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    this.policyService.viewAllPolicyForBill().subscribe({
      next: (data) => {
        this.policies = data;
      },
      error: (error) => {
        console.error('Error fetching policies', error);
      }
    });
  }

  searchPolicies(): void {
    if (this.searchQuery.trim() === '') {
      this.loadPolicies(); // Reload all policies if the search query is empty
    } else {
      this.policyService.policyholder(this.searchQuery).subscribe({
        next: (data) => {
          this.policies = data;
        },
        error: (error) => {
          console.error('Error searching policies:', error);
        }
      });
    }
  }

  deletePolicy(id: string): void {
    this.policyService.deletePolicy(id).subscribe({
      next: res => {
        console.log(res);
        this.loadPolicies(); // Reload the policies after deletion
      },
      error: error => {
        console.log('Error deleting policy:', error);
      }
    });
  }

  editPolicy(id: string): void {
    this.router.navigate(['updatepolicy', id]);
  }

  navigateToAddPolicy(): void {
    this.router.navigateByUrl('/createpolicy');
  }
}
