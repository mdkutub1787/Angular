import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { BillService } from '../../service/bill.service';
import { Router } from '@angular/router';
import { RecieptService } from '../../service/reciept.service';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css'] // Corrected to 'styleUrls'
})
export class RecieptComponent implements OnInit {

  policies: any;
  bills: any;
  receipts: any;

  constructor(
    private policiesService: PolicyService,
    private billService: BillService,
    private recieptService: RecieptService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bills = this.billService.getAllBillForReciept();
    this.receipts = this.recieptService.getAllReciept();
  }

  navigateToAddReciept() {
    this.router.navigateByUrl('/createreciept');
  }

 
}
