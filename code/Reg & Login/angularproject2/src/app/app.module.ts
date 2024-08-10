import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpolicyComponent } from './policy-detailse/addpolicy/addpolicy.component';
import { ViewpolicyComponent } from './policy-detailse/viewpolicy/viewpolicy.component';
import { UpdatepolicyComponent } from './policy-detailse/updatepolicy/updatepolicy.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddbillComponent } from './bill-detailse/addbill/addbill.component';
import { ViewbillComponent } from './bill-detailse/viewbill/viewbill.component';
import { UpdatebillComponent } from './bill-detailse/updatebill/updatebill.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgModule } from '@angular/core';
import { ViewrecieptComponent } from './reciept/viewreciept/viewreciept.component';
import {NgxPrintModule} from 'ngx-print';
import { CreaterecieptComponent } from './reciept/createreciept/createreciept.component';




@NgModule({
  declarations: [
    AppComponent,
    AddpolicyComponent,
    ViewpolicyComponent,
    UpdatepolicyComponent,
    AddbillComponent,
    ViewbillComponent,
    UpdatebillComponent,
    RegistrationComponent,
    LoginComponent,
    UserprofileComponent,
    LogoutComponent,
    ViewrecieptComponent,
    CreaterecieptComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgxPrintModule

  
  ],
  providers: [
    // provideClientHydration(),
    provideHttpClient(
      withFetch(),
    ),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
