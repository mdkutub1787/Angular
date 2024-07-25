import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillModel } from '../bill-model/bill-model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  baseUrl: string = "http://localhost:3000/bill/";

  constructor(private http: HttpClient) { }

  viewAllBill(): Observable<any> {
    return this.http.get(this.baseUrl);

  }

  createBill(bill: BillModel): Observable<BillModel> {
    return this.http.post<BillModel>(this.baseUrl, bill)

  }

}
