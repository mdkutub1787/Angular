import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbillComponent } from './bill/viewbill/viewbill.component';

const routes: Routes = [
  { path: 'viewbill', component: ViewbillComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
