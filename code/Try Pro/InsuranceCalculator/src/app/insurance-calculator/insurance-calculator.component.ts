import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator.component.html',
  styleUrl: './insurance-calculator.component.css'
})
export class InsuranceCalculatorComponent implements OnInit {
  insurances: any;

  constructor(
    private insuranceService: InsuranceService,
    private router: Router,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
    this.insurances = this.insuranceService.getAllInsurance();

  }

  deleteInsurance(id: number) {
    this.insuranceService.deleteInsurance(id)
      .subscribe({
        next: res => {
          this.insurances = this.insuranceService.getAllInsurance();
          this.router.navigate(['/insurance'])
        },
        error: error => {
          console.log(error);
        }

      });

  }


  updateInsurance(id: number) {
    this.router.navigate(['/updateinsurance', id]);
  }

}
