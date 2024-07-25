import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Policies } from '../model/insurance.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  baseUrl: string = "http://localhost:3000/policies";

  constructor(
    private http: HttpClient) { }

  getAllInsurance(): Observable<any> {
    return this.http.get(this.baseUrl)

  }
  // bill component in policy all elements load 
  getAllinsuranceForBill(): Observable<Policies> {
    return this.http.get<Policies>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      )

  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));

  }


  createInsurance(insurance: Policies): Observable<any> {
    return this.http.post<Policies>(this.baseUrl, insurance)

  }

  deleteInsurance(id: number) {
    return this.http.delete(this.baseUrl + "/" + id)

  }

  updateInsurance(id: number, insurance: Policies) {
    return this.http.put(this.baseUrl + "/" + id, insurance);

  }

  getUpdateById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);

  }


}
