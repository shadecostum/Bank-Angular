import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';

@Component({
  selector: 'app-transaction-show',
  templateUrl: './transaction-show.component.html',
  styleUrls: ['./transaction-show.component.css']
})
export class TransactionShowComponent {

  transactions:any;
  constructor(private auth:TransactionServiceService){
  
  this.auth.showAllTransaction().subscribe(
    {
      next:(data)=>
      {
        this.transactions=data
      },
      error:(err:HttpErrorResponse)=>
      {
          console.log(err);
          
      }
    }
  )
    
  }


}
