import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(
    private authaservice: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.Logout();
  }


  Logout() {
    this.authaservice.logout();
    this.authaservice.removeUserDetails();
    this.router.navigate(['login']);

  }

}
