import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { ViewbillComponent } from './bill/viewbill/viewbill.component';
import { CreatebillComponent } from './bill/createbill/createbill.component';
import { UpdatebillComponent } from './bill/updatebill/updatebill.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewbillComponent,
    CreatebillComponent,
    UpdatebillComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPrintModule
  ],

  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
