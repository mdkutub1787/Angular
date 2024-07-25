import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Policies } from '../model/policies.model';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
  baseUrl: string = "http://localhost:3000/policies";

  constructor(private http: HttpClient) { }

  getAllPolicies(): Observable<any> {
    return this.http.get(this.baseUrl);

  }

  getAllPoliciesForBill(): Observable<Policies[]> {
    return this.http.get<Policies[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      )

  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
  }



  createPolicies(policies: Policies): Observable<any> {
    return this.http.post(this.baseUrl, policies);

  }

  deletePolicies(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);

  }

  updatePolicies(id: string, policies: Policies) {
    return this.http.put(this.baseUrl + "/" + id, policies);

  }

  getById(id: string): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);

  }

}
