import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { BillService } from '../../service/bill.service';
import { Router } from '@angular/router';
import { BillModel } from '../../model/bill.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrl: './viewbill.component.css'
})
export class ViewbillComponent implements OnInit {
  policyes: any;
  bills: any;

  constructor(
    private policiesService: PolicyService,
    private billService: BillService,
    private router: Router
  ) { }


  // ngOnInit(): void {
  //   this.loadData();
  // }

  // loadData(): void {
  //   forkJoin({
  //     policyes: this.policiesService.viewAllPolicyForBill(),
  //     bills: this.billService.viewAllBill()
  //   }).subscribe({
  //     next: ({ policyes, bills }) => {
  //       this.policyes = policyes;
  //       this.bills = bills;
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });
  // }

  // deleteBill(billId: string): void {
  //   this.billService.deleteBill(billId)
  //   .subscribe({
  //     next: res => {
  //       this.loadData(); // Refresh the list after deletion
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });
  // }


  ngOnInit(): void {
    this.policyes = this.policiesService.viewAllPolicyForBill();
    this.bills = this.billService.viewAllBill();
  }


  deleteBill(id: string) {
    this.billService.deleteBill(id)
      .subscribe({
        next: res => {
          this.bills = this.billService.viewAllBill();
          this.router.navigate(['/viewbill'])
        },
        error: er => {
          console.log(er);
        }

      });
  }


  editBill(bill: BillModel): void {
    this.router.navigate(['/updatebill', bill.id]);
  }
}
