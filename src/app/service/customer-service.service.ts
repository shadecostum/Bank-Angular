import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

customerRegisterUrl="https://localhost:7078/api/Customer/customerRegister";


passbookViewUrl="https://localhost:7078/api/Customer/passbook?id";

askQueryUrl="https://localhost:7078/api/Query/customerAskQuery"


  constructor(private http:HttpClient) { }

public RegisterCustomer(data:any)
{
  return this.http.post(this.customerRegisterUrl,data)
}

public ViewPassBook(id:any)
{
  return this.http.get(this.passbookViewUrl+"="+id)
}

public AskCustomerQuery(data:any)
{
  return this.http.post(this.askQueryUrl,data)
}


}
