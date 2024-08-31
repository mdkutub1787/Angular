import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected styleUrls property
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  regForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['User', Validators.required], // Pre-setting role as 'User'
      photo: ['']
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (res) => {
          console.log('User logged in successfully:', res);
          this.authService.storeToken(res.token);

          const role = this.authService.getUserRole();
          this.router.navigate(['/userprofile']); // Navigate after successful login
        },
        error: (err) => {
          console.error('Error logging in:', err);
        }
      });
    } else {
      alert('Please complete the mandatory fields in the login form.');
    }
  }

  onRegisterSubmit(): void {
    if (this.regForm.valid) {
      const user: UserModel = this.regForm.value;
      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/login']); // Navigate to login after successful registration
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    } else {
      alert('Please complete the mandatory fields in the registration form.');
    }
  }
}
