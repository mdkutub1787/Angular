import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {NgxPrintModule} from 'ngx-print';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBillComponent } from './insurancebill/add-bill/add-bill.component';
import { ViewBillComponent } from './insurancebill/view-bill/view-bill.component';
// import { DeleteBillComponent } from './insurancebill/delete-bill/delete-bill.component';
// import { UpdateBillComponent } from './insurancebill/update-bill/update-bill.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddBillComponent,
    ViewBillComponent,
    // DeleteBillComponent,
    // UpdateBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [
      // provideClientHydration(),
      provideHttpClient(
        withFetch(),
      )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
