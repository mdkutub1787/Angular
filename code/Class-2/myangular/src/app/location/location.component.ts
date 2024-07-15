import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from './location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  locations: any;

  constructor(private locationService: LocationService,
    private router: Router,
    private httpClient: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.locations = this.locationService.getAllLocation();
  }


}
