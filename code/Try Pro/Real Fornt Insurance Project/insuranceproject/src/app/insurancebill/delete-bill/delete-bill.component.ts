// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { InsuranceService } from '../../service/insurance.service';

// @Component({
//   selector: 'app-delete-bill',
//   templateUrl: './delete-bill.component.html',
//   styleUrl: './delete-bill.component.css'
// })
// export class DeleteBillComponent {
//   deleteForm: FormGroup;

//   constructor(private fb: FormBuilder, private insuranceService: InsuranceService) {
//     this.deleteForm = this.fb.group({
//       billNo: ['']
//     });
//   }

//   onDelete(): void {
//     const { billNo } = this.deleteForm.value;
//     this.insuranceService.deleteBill(billNo).subscribe(() => {
//       this.deleteForm.reset();
//     });
//   }
// }

