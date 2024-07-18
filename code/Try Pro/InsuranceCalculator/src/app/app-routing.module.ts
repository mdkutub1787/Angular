import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceCalculatorComponent } from './insurance-calculator/insurance-calculator.component';
import { CreateinsuranceComponent } from './createinsurance/createinsurance.component';
import { UpdateinsuranceComponent } from './updateinsurance/updateinsurance.component';

const routes: Routes = [
  {path: 'insurance', component:InsuranceCalculatorComponent},
  {path: 'createinsurance', component:CreateinsuranceComponent},
  {path: 'updateinsurance/:id', component:UpdateinsuranceComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
