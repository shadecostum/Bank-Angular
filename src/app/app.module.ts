import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { CutomerDashboardComponent } from './Customer/cutomer-dashboard/cutomer-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { FormsModule } from '@angular/forms';
import { CustomerRegisterComponent } from './Customer/customer-register/customer-register.component';
import { CustomerDocumentComponent } from './Customer/customer-document/customer-document.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupPageComponent,
    WeatherComponent,
    AdminDashboardComponent,
    CutomerDashboardComponent,
    CustomerRegisterComponent,
    CustomerDocumentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,ReactiveFormsModule,HttpClientModule, FontAwesomeModule,FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
