import { Component, OnInit } from '@angular/core';
import { Insured, Period, Premium, Root, Situation } from '../model/insurance.model';
import { InsuranceService } from '../service _insurance/insurance.service';

@Component({
  selector: 'app-insurance-bills',
  templateUrl: './insurance-bills.component.html',
  styleUrl: './insurance-bills.component.css'
})
export class InsuranceBillsComponent implements OnInit{

  insuranceBills: Root[] = [];
  newInsuranceBill: Root =
    new Root('', '',
      new Insured('', '', ''), 0, '', '',
      new Situation('', '', '', ''),
      new Period('', ''),
      new Premium(0, 0, 0, 0));

  constructor(private insuranceService: InsuranceService) { }


  ngOnInit(): void {
    this.insuranceBills = this.insuranceService.getInsuranceBills();
  }

  addInsuranceBill(): void {
    this.insuranceService.addInsuranceBill(this.newInsuranceBill);
    this.newInsuranceBill = new Root('', '', new Insured('', '', ''), 0, '', '',
     new Situation('', '', '', ''), new Period('', ''), new Premium(0, 0, 0, 0));
    this.insuranceBills = this.insuranceService.getInsuranceBills();
  }

  deleteInsuranceBill(billNo: string): void {
    this.insuranceService.deleteInsuranceBill(billNo);
    this.insuranceBills = this.insuranceService.getInsuranceBills();
  }

  // updateInsuranceBill(): void {
  //   if (this.editBill) {
  //     this.insuranceService.updateInsuranceBill(this.editBill);
  //     this.editBill = null;
  //     this.insuranceBills = this.insuranceService.getInsuranceBills();
  //   }
  // }

  // cancelEdit(): void {
  //   this.editBill = null;
  // }
}

