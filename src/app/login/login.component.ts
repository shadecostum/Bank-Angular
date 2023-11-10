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
constructor(private auth:UserServiceService,private route:Router){}

  submitData(data:any)
  {

    this.auth.login(data).subscribe(
      {
        next:(data)=>
      {
    
        console.log(data);
        this.token=data;
        localStorage.setItem("token",this.token.actualToken)
        
         this.route.navigateByUrl("/weather")
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
