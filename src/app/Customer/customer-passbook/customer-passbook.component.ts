import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/service/account-service.service';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-passbook',
  templateUrl: './customer-passbook.component.html',
  styleUrls: ['./customer-passbook.component.css']
})
export class CustomerPassbookComponent {

 
constructor(private auth:AccountServiceService)
{

}

accounts:any[]=[]
FilterData:any
resultcondition=false
resultArray=false
AccountSatement()
{this.auth.AccountFilter(this.FilterData).subscribe(
  {
    next:(data:any)=>
    {
      if (data === null || (typeof data === 'object' && Object.keys(data).length === 0)) {
        this.resultcondition = false;
        this.resultArray=true;

      } else if (Array.isArray(data)) {
        this.accounts = data;
        console.log(data);
        this.resultcondition = true;
      } else {
        console.error("Unexpected data format:", data);
      }
    }
  }
)

}

}
