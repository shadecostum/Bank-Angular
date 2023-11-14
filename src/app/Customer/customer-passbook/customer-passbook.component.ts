import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-passbook',
  templateUrl: './customer-passbook.component.html',
  styleUrls: ['./customer-passbook.component.css']
})
export class CustomerPassbookComponent {
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


}
