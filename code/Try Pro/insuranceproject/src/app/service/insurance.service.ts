import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private apiUrl = 'http://localhost:3000/bills/';

  constructor(private http: HttpClient) { }

  // Get all bills
  getBills(): Observable<Root[]> {
    return this.http.get<Root[]>(this.apiUrl);
  }

   // Add a new bill
   addBill(bill: Root): Observable<Root> {
    return this.http.post<Root>(this.apiUrl, bill);
  }
}
