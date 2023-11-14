import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.css']
})
export class CustomerQueryComponent {


  constructor(private auth:CustomerServiceService,private routeSet:Router)
  {
    
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


reset(){location.reload()}

}
