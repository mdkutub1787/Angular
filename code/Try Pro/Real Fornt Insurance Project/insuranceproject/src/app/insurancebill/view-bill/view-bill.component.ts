import { Component, OnInit } from '@angular/core';
import { Insured, Period, Premium, Root, Situation } from '../../model/bill.model';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InsuranceService } from '../../service/insurance.service';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrl: './view-bill.component.css'
})
export class ViewBillComponent implements OnInit {
  bill: Root;
  bills: any;

  constructor(private insuranceService: InsuranceService,
    private router: Router,
    private httpClient: HttpClient
  ) {
    // Initialize with example data
    this.bill = new Root(
      "0178",
      "01-JUL-24",
      new Insured(
        "Islami Bank Bangladesh PLC, Baliakandi Sub-Branch, Rajbari",
        "M's. Bulbul Enterprise, Prop: Rokibul Islam",
        "Narua Road, Narua Bazar, Baliakandi, RAJBARI"
      ),
      2200000.00,
      "Stock Of Onion, Garlic & Seasonal Crops (Without Jute) Only.",
      "Fire &/or Lightning only",
      new Situation(
        "Narua Road, Narua Bazar, Baliakandi, RAJBARI",
        "2nd Class",
        "Shop-Cum-Godown Only",
        "The Insured."
      ),
      new Period("28-JUL-24", "28-JUL-25"),
      new Premium(0.210, 4620.00, 693.00, 5313.00)
    );
  }

  ngOnInit(): void {
    this.bills = this.insuranceService.getBills();
  }


}
