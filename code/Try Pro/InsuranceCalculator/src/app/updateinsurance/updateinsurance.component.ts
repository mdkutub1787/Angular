import { Component, OnInit } from '@angular/core';
import { Policies } from '../model/insurance.model';
import { InsuranceService } from '../service/insurance.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateinsurance',
  templateUrl: './updateinsurance.component.html',
  styleUrl: './updateinsurance.component.css'
})
export class UpdateinsuranceComponent implements OnInit {
  insurance: Policies = new Policies();
  id: number = 0;

  constructor(
    private insuranceService: InsuranceService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.insurance = new Policies();
    this.id = this.route.snapshot.params['id'];
    this.insuranceService.getUpdateById(this.id)
      .subscribe({
        next: res => {
          console.log(res);
          this.insurance = res;

        },

        error: err => {
          console.log(err);
        }
      });

  }

  updateInsurance() {

    this.insuranceService.updateInsurance(this.id, this.insurance)
      .subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/insurance']);
        },

        error: err => {
          console.log(err);
        }

      });
  }

}