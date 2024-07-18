import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceBillsComponent } from './insurance-bills/insurance-bills.component';

const routes: Routes = [
  { path: 'insurance', component: InsuranceListComponent },
  { path: 'addInsuranceBill', component: InsuranceBillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
