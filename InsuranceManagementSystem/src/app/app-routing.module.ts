import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidbarComponent } from './component/sidbar/sidbar.component';
import { ContentComponent } from './component/content/content.component';

const routes: Routes = [
  {path:"sidebar",component: SidbarComponent},
  {path:"content",component: ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
