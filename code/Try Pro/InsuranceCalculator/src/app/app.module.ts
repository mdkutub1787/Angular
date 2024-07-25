import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ViewpoliciesComponent } from './policies/viewpolicies/viewpolicies.component';
import { CreatepoliciesComponent } from './policies/createpolicies/createpolicies.component';
import { UpdatepoliciesComponent } from './policies/updatepolicies/updatepolicies.component';
import { ViewbillComponent } from './bill/viewbill/viewbill.component';
import { CreatebillComponent } from './bill/createbill/createbill.component';
import { UpdatebillComponent } from './bill/updatebill/updatebill.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewpoliciesComponent,
    CreatepoliciesComponent,
    UpdatepoliciesComponent,
    ViewbillComponent,
    CreatebillComponent,
    UpdatebillComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
