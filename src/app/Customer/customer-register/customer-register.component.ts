import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchpassword } from 'src/app/matchpassword.validator';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {

   
  customerRegisterForm=new FormGroup(
    {
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      userId:new FormControl('',[Validators.required]),
      DOB:new FormControl('',[Validators.required]),
    },
  

  )
  
  get firstNameValidator()
  {
    return this.customerRegisterForm.get('firstName')
  }
  get lastNameValidator()
  {
    return this.customerRegisterForm.get('lastName')
  }
  get dobValidator()
  {
    return this.customerRegisterForm.get('DOB')
  }
  get emailValidator()
  {
    return this.customerRegisterForm.get('email')
  }
 
  get userValidator()
  {
    return this.customerRegisterForm.get('userId')
  }


  constructor(private auth:CustomerServiceService,private router:Router){}


  responceRegisteration=false;

  submitData(data:any)
  {
this.auth.RegisterCustomer(data).subscribe(
  {
    next:(data)=>
    {
    
      console.log(data);
      alert("registration success");
      this.router.navigateByUrl("/customer");
      
    },
    error:(err:HttpErrorResponse)=>
    {
      if(err)
      {
        this.responceRegisteration=true;
      }
      console.log(err);
      console.log("error here");
      
      
    }
  }
)
  }

  reset()
  {
    location.reload();
  }


}
