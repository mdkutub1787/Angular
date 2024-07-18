import { Component, OnInit } from '@angular/core';
import { Insured, Period, Premium, Root, Situation } from '../model/insurance.model';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrl: './insurance-list.component.css'
})
export class InsuranceListComponent implements OnInit {
  insuranceData: Root;


  constructor() {
    this.insuranceData = new Root(
      '123456',
      '2023-07-18',
      new Insured('John Doe', 'Policyholder Inc.', '123 Main St, Anytown, USA'),
      100000,
      'Electronics',
      'Interest in electronics',
      new Situation('456 Market St, Anytown, USA', 'Brick', 'Retail', 'John Doe'),
      new Period('2023-01-01', '2023-12-31'),
      new Premium(1.5, 1500, 150, 1650)
    );
  }
  ngOnInit(): void {

  }
}
