import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

  deleteBill(billNo: string): Observable<void> {
    const url = `${this.apiUrl}?billNo=${billNo}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }


  // Update a bill
  updateBill(bill: Root): Observable<Root> {
    return this.http.put<Root>(`${this.apiUrl}/${bill.billNo}`, bill);
  }
}

