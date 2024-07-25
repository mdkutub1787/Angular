import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PolicyModel } from '../model/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  baseUrl: string = "http://localhost:3000/policy";

  constructor(private http: HttpClient) { }

  viewAllPolicy(): Observable<any> {
    return this.http.get(this.baseUrl);

  }
  viewAllPolicyForBill(): Observable<PolicyModel[]> {
    return this.http.get<PolicyModel[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      )

  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
  }



  createPolicy(policy: PolicyModel): Observable<any> {
    return this.http.post(this.baseUrl, policy)
  }


  deletePolicy(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);

  }

  updatePolicy(id: string, policy: PolicyModel): Observable<any> {
    return this.http.put(this.baseUrl + "/" + id, policy);

  }

  getByPolicyId(id: string): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);

  }
}
