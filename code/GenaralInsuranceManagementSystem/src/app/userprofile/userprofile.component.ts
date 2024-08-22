import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserprofileService } from '../service/userprofile.service';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserModel } from '../model/user.model';
import { Subscription } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit, OnDestroy {
  user!: UserModel;
  data: any;
  private subscription: Subscription = new Subscription();

  constructor(
    private userProfileService: UserprofileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
    // If you need to subscribe to additional observables:
    const dataSubscription = this.userProfileService.getData()
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response) => {
          this.data = response;
          console.log('Data received:', this.data);
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        }
      });
    this.subscription.add(dataSubscription);
  }

  loadUserProfile(): void {
    this.userProfileService.getUserProfile()
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (user) => {
          if (user) {
            this.user = user;
          }
        },
        error: (err) => {
          console.error('Error loading user profile:', err);
        }
      });
  }

  ngOnDestroy(): void {
    // Clean up any additional subscriptions if needed
    this.subscription.unsubscribe();
  }
}
