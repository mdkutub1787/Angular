import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this.authService.logout();
    this.authService.removeUserDetails();
    this.router.navigate(['login']);

  }


}
