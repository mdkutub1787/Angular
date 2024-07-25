import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBillComponent } from './insurancebill/view-bill/view-bill.component';
import { AddBillComponent } from './insurancebill/add-bill/add-bill.component';

const routes: Routes = [
  { path: "viewbill", component: ViewBillComponent },
  { path: "addbill", component: AddBillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
