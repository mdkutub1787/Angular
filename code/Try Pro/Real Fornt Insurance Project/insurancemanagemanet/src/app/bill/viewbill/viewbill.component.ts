import { Component, OnInit } from '@angular/core';
import { BillService } from '../../service/bill.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrl: './viewbill.component.css'
})
export class ViewbillComponent implements OnInit {
  bills: any;

  constructor(private billService: BillService,
    private router: Router,
    private httpClient: HttpClient

  ) { }
  ngOnInit(): void {
    this.bills = this.billService.getBill();
  }


}
