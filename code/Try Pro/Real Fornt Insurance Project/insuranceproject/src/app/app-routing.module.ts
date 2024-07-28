import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBillComponent } from './insurancebill/view-bill/view-bill.component';
import { AddBillComponent } from './insurancebill/add-bill/add-bill.component';
// import { DeleteBillComponent } from './insurancebill/delete-bill/delete-bill.component';
// import { UpdateBillComponent } from './insurancebill/update-bill/update-bill.component';

const routes: Routes = [
  { path: "getBill", component: ViewBillComponent },
  { path: "addBill", component: AddBillComponent },
  // { path: "deleteBill/:billNo", component: DeleteBillComponent },
  // { path: "updateBill/:billNo", component: UpdateBillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
