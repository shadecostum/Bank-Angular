import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { QueryServiceService } from 'src/app/service/query-service.service';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  faCoffee = faCoffee;

  condition=true;
  sharedComponent:any

  constructor(private dateFilter:TransactionServiceService,
    private routeSet:Router,
    private QueryRequest:QueryServiceService)
  {
    
  }
 

  reset(){
    this.noQueryAdded=false
    location.reload()
 }

  result: any[] = [];
  resultcondition = false;
  dateData: any;
  resultArray=false;
  
  searchData() {
    this.dateFilter.getTransactionByDate(this.dateData).subscribe(
      {
        next: (data: any) => {
          if (data === null || (typeof data === 'object' && Object.keys(data).length === 0)) {
            this.resultcondition = false;
            this.resultArray=true;

          } else if (Array.isArray(data)) {
            this.result = data;
            console.log(data);
            this.resultcondition = true;
          } else {
            console.error("Unexpected data format:", data);
          }
        },
        error: (er: HttpErrorResponse) => {
          console.log(er);
        }
      }
    );
  }
  

//card show query request by click
showQueryResult=false;
customerQueries:any;
noQueryAdded=false;


  handleCardClick() {
   this.QueryRequest.getRequestQuery().subscribe(
    {
      next:(data)=>
      {
       
        this.customerQueries=data;
        console.log(data);
        this.showQueryResult=true;

      },
      error:(err:HttpErrorResponse)=>
      {
        this.noQueryAdded=true;
        console.log(err);
        console.log("error worked");

      }
    }
   )
  }




  feedbackMessage:any;


//reply form


  replyForm = new FormGroup({
    replyQuery: new FormControl('', Validators.required),
    customerId: new FormControl('', Validators.required),

});
get replyValidator()
{
  return this.replyForm.get('replyQuery')
}
get cutomerIdValidator()
{
  return this.replyForm.get('customerId')
}





onSubmit(formData:any) {

    // Assuming you have a method in your service to handle the data submission
    this.QueryRequest.putReplyQuery(formData).subscribe(
      {
     next:(data) => {
        
        this.feedbackMessage=data;
        alert("succesfully Replied")
        location.reload()

        
      },
      error:(error:HttpErrorResponse) => {
        console.log(error);
        console.log("error here");
        
        
      }
    }
    );
  }


  formShow=false;
  generateReplyForm()
  {
this.formShow=true;
this. showCustomerAll=false
this.showAccountTransactions=false 
this.showAccountRequest=false;
this.showQueryResult=false;
  }

  //accounrequest
showAccountRequest=false
  handleAccountRequest()
  {
this.showAccountRequest=true;
this. showCustomerAll=false
this.showAccountTransactions=false 
this.formShow=false;
this.showQueryResult=false;
  }

  //
  showAccountTransactions=false 
  AccountTransactionFilter()
  {
    this.showAccountTransactions=true; 
    this. showCustomerAll=false
    this.showAccountRequest=false;
    this.formShow=false;
   this.showQueryResult=false;
  }

  //showCustomerAll

showCustomerAll=false
showCustomerFun()
{
 this. showCustomerAll=true
 this.showAccountRequest=false;
 this.showAccountTransactions=false 
 this.formShow=false;
 this.showQueryResult=false;
}


}
