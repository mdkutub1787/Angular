import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policies } from '../model/insurance.model';
import { Observable } from 'rxjs';

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
