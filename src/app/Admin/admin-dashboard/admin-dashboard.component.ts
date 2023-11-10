import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  condition=true;
  sharedComponent:any
  constructor(private routeSet:Router)
  {
    
  }
  moveLogin()
  {
    this.routeSet.navigateByUrl('/signup')
    this.condition=false
  }
  moveShowData()
  {
    
    this.routeSet.navigateByUrl('/showpage')
   
  }

  moveAddData()
  {
    this.routeSet.navigateByUrl('/addpage')
    this.condition=false
  }

  moveDeleteData()
  {
    this.routeSet.navigateByUrl('/deletepage')
    this.condition=false
  }

  moveUpdateData()
  {
    this.routeSet.navigateByUrl('/updatepage')
    this.condition=false
  }

  reset(){location.reload()}
}
