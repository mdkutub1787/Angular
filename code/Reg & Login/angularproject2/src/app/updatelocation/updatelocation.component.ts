import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../location/location.model';
import { LocationService } from '../location/location.service';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrl: './updatelocation.component.css'
})
export class UpdatelocationComponent implements OnInit {
  location: Location = new Location();
  id: string = "";

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }


  ngOnInit(): void {
    this.location =new Location();
    this.id = this.route.snapshot.params['id'];
    this.locationService.getById(this.id)
      .subscribe({
        next: res => {
          console.log(res);
          this.location = res;

        },

        error: err => {
          console.log(err);
        }
      });

  }

  updateLocation() {

    this.locationService.updateLocation(this.id, this.location)
      .subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/location']);
        },

        error: err => {
          console.log(err);
        }

      });
  }

}
