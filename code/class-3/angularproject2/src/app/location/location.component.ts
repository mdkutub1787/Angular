import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  loctions: any;

  constructor(private locationService: LocationService,
    private router: Router,
    private httpClient: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.loctions = this.locationService.getAllLocation();

  }

  deleteLocation(id: string) {
    this.locationService.deleteLocation(id)
      .subscribe({
        next: res => {
          this.loctions = this.locationService.getAllLocation();
          this.router.navigate(['/location'])
        },
        error: error => {
          console.log(error);
        }
      });

  }

}
