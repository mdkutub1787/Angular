import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { LocationComponent } from './location/location.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "student", component: StudentComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "location", component: LocationComponent },
  { path: 'reg', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
