import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

url="https://localhost:7078/api/Login/login"


constructor(private http:HttpClient){}

  login(data:any)
  {
    return this.http.post(this.url,data)
  }



}
