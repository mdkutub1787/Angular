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
import { ViewrecieptComponent } from './reciept/viewreciept/viewreciept.component';
import { CreaterecieptComponent } from './reciept/createreciept/createreciept.component';
import { RoleGuard } from './guard/role.guard';


const routes: Routes = [

  { path: "viewpolicy", component: ViewpolicyComponent, canActivate:[AuthGuard, RoleGuard],
    data: { role: 'User' }
  }, 

  { path: "addpolicy", component: AddpolicyComponent,canActivate:[AuthGuard, RoleGuard],
    data: { role: 'Admin' }
  },

  { path: "updatepolicy/:id", component: UpdatepolicyComponent },

  { path: "viewbill", component: ViewbillComponent, canActivate:[AuthGuard, RoleGuard],
    data: { role: 'User' }
  },

  { path: "addbill", component: AddbillComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Admin' }
  },

  { path: "updatebill/:id", component: UpdatebillComponent},

  { path: "viewreceipt", component: ViewrecieptComponent ,canActivate:[AuthGuard, RoleGuard],
    data: { role: 'User' }
  },

  { path: "createrecipt", component: CreaterecieptComponent ,canActivate:[AuthGuard, RoleGuard],
    data: { role: 'Admin' }
  },

  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },

  {
    path: 'userprofile',
    component: UserprofileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data:{role: ['Admin','User']}
    
  },

  { path: "**", redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
