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
viewPassbook()
{
 this.showPassbook=true;
}

//show Account statment
showAccountStatment=false

viewAccountStatement()
{
 this.showAccountStatment=true

 this.showQuery=false
this.showDocument = false;
this.showAccountCreate=false;
this.showTransaction=false;
this.showAccountForm=false;
this.showPassbook=false;
}



//ask query form
showQuery=false;

viewQueryForm()
{
this.showQuery=true

this.showAccountStatment=false;
this.showDocument = false;
this.showAccountCreate=false;
this.showTransaction=false;
this.showAccountForm=false;
this.showPassbook=false;
}



//document form
showDocument: boolean = false;

showDocumentFun() {
  this.showDocument = true;

  this.showAccountStatment=false
  this.showQuery=false
 this.showAccountCreate=false;
 this.showTransaction=false;
 this.showAccountForm=false;
 this.showPassbook=false;
}


//account form
showAccountCreate:boolean=false;
showAccountCreateFun()
{

this.showAccountCreate=true;

  this.showDocument = false;
  this.showQuery=false
  this.showTransaction=false;
  this.showAccountForm=false;
  this.showPassbook=false;


}


//show transaction interface
showTransaction=false
showTransactionFun()
{
this.showTransaction=true

  this.showAccountCreate=false;
  this.showDocument = false;
  this.showQuery=false
  this.showAccountCreate=false;
  this.showAccountForm=false;
  this.showPassbook=false;
}


//Account type requesting from shoeing function
showAccountForm=false;
showAccountRequestFun()
{
this.showAccountForm=true;

  this.showTransaction=false
  this.showAccountCreate=false;
  this.showDocument = false;
  this.showQuery=false
  this.showAccountCreate=false;
  this.showPassbook=false;
}






}
