import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-.service';
import { UserModel } from '../model/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  private baseUrl = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getUserProfile(): Observable<UserModel | null> {
    return of(this.authService.getUserProfileFromStorage());
  }

  
}