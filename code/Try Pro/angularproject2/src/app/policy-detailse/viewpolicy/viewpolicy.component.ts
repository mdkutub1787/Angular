import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PolicyModel } from '../../model/policy.model';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrl: './viewpolicy.component.css'
})
export class ViewpolicyComponent implements OnInit {
  policyes: any;

  constructor(
    private policyService: PolicyService,
    private http: HttpClient,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.policyes = this.policyService.viewAllPolicy();

  }

  deletePolicy(id: string) {
    this.policyService.deletePolicy(id)
      .subscribe({
        next: res => {
          console.log(res);
          this.policyes = this.policyService.viewAllPolicy();
          this.router.navigate(['viewpolicy'])
        },
        error: error => {
          console.log(error);

        }

      });
  }

  editPolicy(id: string) {
    this.router.navigate(['updatepolicy', id]);
  }

}
