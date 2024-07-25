import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillModel } from '../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  baseUrl: string = "http://localhost:3000/bills/";


  constructor(
    private http: HttpClient
  ) { }

  viewAllBill(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createBill(bills: BillModel): Observable<BillModel> {
    return this.http.post<BillModel>(this.baseUrl, bills)

  }

  deleteBill(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }


  updateBill(bill: BillModel): Observable<BillModel> {
    return this.http.put<BillModel>(this.baseUrl + bill.id, bill)
  }

  getByBillId(billId: string): Observable<BillModel> {
    return this.http.get<BillModel>(this.baseUrl + billId);

  }

}
