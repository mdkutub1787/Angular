// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { InsuranceService } from '../../service/insurance.service';
// import { Root } from '../../model/bill.model';

// @Component({
//   selector: 'app-update-bill',
//   templateUrl: './update-bill.component.html',
//   styleUrl: './update-bill.component.css'
// })
// export class UpdateBillComponent {
//   updateForm: FormGroup;

//   constructor(private fb: FormBuilder, private insuranceService: InsuranceService) {
//     this.updateForm = this.fb.group({
//       billNo: [''],
//       date: [''],
//       insured: this.fb.group({
//         name: [''],
//         policyholder: [''],
//         address: ['']
//       }),
//       sumInsured: [0],
//       stockInsured: [''],
//       interestInsured: [''],
//       situation: this.fb.group({
//         location: [''],
//         construction: [''],
//         usedAs: [''],
//         owner: ['']
//       }),
//       period: this.fb.group({
//         from: [''],
//         to: ['']
//       }),
//       premium: this.fb.group({
//         rate: [0],
//         firePremium: [0],
//         vat: [0],
//         grossPremium: [0]
//       })
//     });
//   }

//   updateBill(): void {
//     const updatedBill: Root = this.updateForm.value;
//     this.insuranceService.updateBill(updatedBill).subscribe(() => {
//       this.updateForm.reset();
//     });
//   }
// }

