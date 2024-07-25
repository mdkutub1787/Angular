import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill-service/bill.service';
import { PoliciesService } from '../../policies/policies-service/policies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrl: './viewbill.component.css'
})
export class ViewbillComponent implements OnInit {

  bills: any;
  policiess: any;

  constructor(
    private billService: BillService,
    private policiesService: PoliciesService,
    private router: Router,

  ) { }


  ngOnInit(): void {
    this.bills = this.billService.viewAllBill();
    this.policiess = this.policiesService.getAllPoliciesForBill();

  }



}
