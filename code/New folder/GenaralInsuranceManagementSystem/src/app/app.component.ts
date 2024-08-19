import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PolicyService } from './service/policy.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { delay, filter } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'GenaralInsuranceManagementSystem';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private policyService: PolicyService,
    private observer: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Example Observable Subscription using untilDestroyed
    // Replace `this.someObservable` with an actual observable from your component or service
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav?.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}
