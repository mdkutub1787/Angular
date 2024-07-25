import { Injectable } from '@angular/core';
import { Root } from '../model/insurance.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private insuranceBills: Root[] = [];

  constructor() { }

  getInsuranceBills(): Root[] {
    return this.insuranceBills;
  }

  addInsuranceBill(insuranceBill: Root): void {
    this.insuranceBills.push(insuranceBill);
  }

  deleteInsuranceBill(billNo: string): void {
    this.insuranceBills = this.insuranceBills.filter(bill => bill.billNo !== billNo);
  }

  // updateInsuranceBill(updatedBill: Root): void {
  //   const index = this.insuranceBills.findIndex(bill => bill.billNo === updatedBill.billNo);
  //   if (index !== -1) {
  //     this.insuranceBills[index] = updatedBill;
  //   }
  // }
}
