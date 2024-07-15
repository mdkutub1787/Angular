import { Routes } from '@angular/router';
import { KutubComponent } from './kutub/kutub.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
{path:"kutub",component:KutubComponent},
{path:"student",component:StudentComponent},
{path:"employee",component:EmployeeComponent}


];
