import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  accountFilterTransactionUrl="https://localhost:7078/api/Account/TransactionFilter";

  accountRequestAdminUrl="https://localhost:7078/api/Account/customerAccountRequest";

  constructor(private http:HttpClient) { }

public AccountFilter(id:any)
{
  return this.http.get(this.accountFilterTransactionUrl+"/"+id);
}

public RequestAccount(data:any)
{
  return this.http.post(this.accountRequestAdminUrl,data)
}



}

