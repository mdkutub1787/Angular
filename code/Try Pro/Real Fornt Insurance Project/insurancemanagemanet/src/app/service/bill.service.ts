import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  baseUrl: string = 'http://localhost:3000/bills/';

  constructor(private http: HttpClient) { }

  // Get all bills
  getBill(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
