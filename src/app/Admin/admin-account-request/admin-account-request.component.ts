import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountServiceService } from 'src/app/service/account-service.service';

@Component({
  selector: 'app-admin-account-request',
  templateUrl: './admin-account-request.component.html',
  styleUrls: ['./admin-account-request.component.css']
})
export class AdminAccountRequestComponent {

  refreshfun() {
    console.log('refreshfun called');
    location.reload();
  }
  accounts: any[] = [];
  showAccountNotFound=false
  accountRequestTrue=false
  constructor(private auth:AccountServiceService)
   {
    this.auth.ShowAccountRequest().subscribe(
      {
      next:(data: any) => {
        this.accounts = data;
        this.accountRequestTrue=true
      },
      error:(error:HttpErrorResponse) => {
        console.error('Error fetching accounts:', error);
       this.showAccountNotFound=true
       this.accountRequestTrue=false
      }
    }
    );
   }

   acceptAccount(account:any)
   {
    this.auth.ActivateAccountById(account).subscribe(
      {
        next:(res)=>
        {
          alert("account Activated Successfully")
          location.reload()
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);

          
        }
      }
    )
   } 
   viewDocument(account:any)
   {

   }
    // Assuming you have a method in your ApiService to fetch data
    searchDocument()
    {
      
    }

   
  
searchCustomerId:any
}
