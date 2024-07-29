import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { BillService } from '../../service/bill.service';
import { Router } from '@angular/router';
import { RecieptService } from '../../service/reciept.service';

@Component({
  selector: 'app-viewreciept',
  templateUrl: './viewreciept.component.html',
  styleUrl: './viewreciept.component.css'
})
export class ViewrecieptComponent implements OnInit {

  policyes: any;
  bills: any;
  reciepts: any;

  constructor(
    private policiesService: PolicyService,
    private billService: BillService,
    private recieptService: RecieptService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.bills = this.billService.getAllBillForReciept();
    this.reciepts = this.recieptService.getAllReciept();

  }

}
