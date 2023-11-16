import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginUserForm=new FormGroup(
  {
    UserName:new FormControl('',[Validators.required]),
    Password :new FormControl('',[Validators.required])
  }
) 



get userValidator()
{
  return this.loginUserForm.get('UserName')
}
get passwordValidator()
{
  return this.loginUserForm.get('Password')
}

token:any='';
headers:any;
constructor(private auth:UserServiceService,private route:Router){}

  submitData(data:any)
  {

    this.auth.login(data).subscribe(
      {
        next:(response:any)=>
      {
        const roleName = response.message;
          

    //   this.headers=response.headers.get('jwt');
    //   this.headers=JSON.parse(this.headers)

    //     console.log(roleName);
    //    console.log(this.headers);
        
    //  localStorage.setItem("token",this.headers)
        
     
         if (roleName==="Admin") {

          var token="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTWVzc2kiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcwMDU2Mjk5NX0.ajJdCSLOii1_jnhPyDgQrKoAiSiH6_glFTdmsrnmBr1pdYtXG06cbmHd8a1gciM1Za_LjguhB4GrwTyZ7wEbPQ"
          localStorage.setItem("token",token)
          this.route.navigateByUrl('/admin');
        } else if (roleName === 'Customer') {
          var tokenCustomer="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRGhvbmkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDdXN0b21lciIsImV4cCI6MTcwMDU2NTQzOH0.fPI8jeIN7I0TlJsBd9s7r5_MZLGkH1VYDEDXHktUpyaGNaxcl2x9pJWfqwg4fC1O51JG93VBXGGavUTS1gOqyA" 
          localStorage.setItem("token",tokenCustomer)
          this.route.navigateByUrl('/customer');
        } 
      },
      error:(errorResponce:HttpErrorResponse)=>
      {
        console.log(errorResponce);
        console.log("error happende");
        
        
      }
    }
    )
  }
}
