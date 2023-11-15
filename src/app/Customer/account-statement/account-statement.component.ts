import { Component } from '@angular/core';
import { AccountServiceService } from 'src/app/service/account-service.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent {

  
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
