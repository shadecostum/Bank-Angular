import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-cutomer-dashboard',
  templateUrl: './cutomer-dashboard.component.html',
  styleUrls: ['./cutomer-dashboard.component.css']
})
export class CutomerDashboardComponent {
  condition=true;
  sharedComponent:any
  rollNo:any;
  constructor(private auth:CustomerServiceService,private routeSet:Router)
  {
    
  }
  

  reset(){location.reload()}
passbook:any;
showPassbook=false;
//view Pass book
viewPassbook(id:any)
{

this.auth.ViewPassBook(id).subscribe(
  {
    next:(data)=>
    {
      if(data!=null)
      {this.showPassbook=true
      this.passbook=data;
      console.log(data);
      }
    },
    error:(er:HttpErrorResponse)=>
    {
      console.log(er);
      console.log("error here");
      
      
    }
  }
)
}


showQuery=false;
//ask query
viewQueryForm()
{
this.showQuery=true
}


QueryForm=new FormGroup(
  {
    queryText:new FormControl('',Validators.required),
    customerId:new FormControl('',Validators.required)
  }
)


get queryValidator()
{
  return this.QueryForm.get('queryText')
}

get cutomerIdValidator()
{
  return this.QueryForm.get('customerId')
}


queryResponce=false;

onSubmit(data:any)
{
this.auth.AskCustomerQuery(data).subscribe(
  {
    next:(data)=>
    {
      console.log(data);
      this.queryResponce=true;
    },
    error:(err:HttpErrorResponse)=>
    {
      console.log(err);
      console.log("error here");
      
      
    }
  }
)
}

}
