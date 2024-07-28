import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpolicyComponent } from './policy-detailse/viewpolicy/viewpolicy.component';
import { AddpolicyComponent } from './policy-detailse/addpolicy/addpolicy.component';
import { UpdatepolicyComponent } from './policy-detailse/updatepolicy/updatepolicy.component';
import { ViewbillComponent } from './bill-detailse/viewbill/viewbill.component';
import { AddbillComponent } from './bill-detailse/addbill/addbill.component';
import { UpdatebillComponent } from './bill-detailse/updatebill/updatebill.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthGuard } from './guard/authguard.guard';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: "viewpolicy", component: ViewpolicyComponent },
  { path: "createpolicy", component: AddpolicyComponent, canActivate: [AuthGuard] },
  { path: "updatepolicy/:id", component: UpdatepolicyComponent, canActivate: [AuthGuard] },
  { path: "viewbill", component: ViewbillComponent, canActivate: [AuthGuard] },
  { path: "addbill", component: AddbillComponent, canActivate: [AuthGuard] },
  { path: "updatebill/:id", component: UpdatebillComponent, },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "userprofile", component: UserprofileComponent },
  { path: "**", redirectTo: 'login', pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
