import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { InsuranceCalculatorComponent } from './insurance-calculator/insurance-calculator.component';
import { CreateinsuranceComponent } from './createinsurance/createinsurance.component';
import { UpdateinsuranceComponent } from './updateinsurance/updateinsurance.component';


@NgModule({
  declarations: [
    AppComponent,
    InsuranceCalculatorComponent,
    CreateinsuranceComponent,
    UpdateinsuranceComponent,
   
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
