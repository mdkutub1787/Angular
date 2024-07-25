import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpoliciesComponent } from './policies/viewpolicies/viewpolicies.component';
import { CreatepoliciesComponent } from './policies/createpolicies/createpolicies.component';
import { UpdatepoliciesComponent } from './policies/updatepolicies/updatepolicies.component';
import { ViewbillComponent } from './bill/viewbill/viewbill.component';
import { CreatebillComponent } from './bill/createbill/createbill.component';


const routes: Routes = [
  {path: 'viewpolicies', component:ViewpoliciesComponent},
  {path: 'createpolicies', component:CreatepoliciesComponent},
  {path: 'updatepolicies/:id', component:UpdatepoliciesComponent},
  {path: 'viewbill', component:ViewbillComponent},
  {path: 'createbill', component:CreatebillComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
