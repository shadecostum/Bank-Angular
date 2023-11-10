import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { WeatherComponent } from './weather/weather.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"registerForm",component:SignupPageComponent},
  {path:"weather",component:WeatherComponent},
  {path:"admin",component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
