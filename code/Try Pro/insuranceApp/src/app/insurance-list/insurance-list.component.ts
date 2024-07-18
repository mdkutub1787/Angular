import { Component, OnInit } from '@angular/core';
import { Insured, Period, Premium, Root, Situation } from '../model/insurance.model';
import { InsuranceService } from '../service _insurance/insurance.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrl: './insurance-list.component.css'
})
export class InsuranceListComponent implements OnInit {
  insuranceBills: Root[] = [];
  newInsuranceBill: Root =
    new Root('', '',
      new Insured('', '', ''), 0, '', '',
      new Situation('', '', '', ''),
      new Period('', ''),
      new Premium(0, 0, 0, 0));

  constructor(private insuranceService: InsuranceService) { }


  ngOnInit(): void {
    this.insuranceBills = this.insuranceService.getInsuranceBills();
  }
}
