import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  dateFilterUrl="https://localhost:7078/api/Transaction"
  constructor(private http:HttpClient) { }


  getTransactionByDate(data:any)
  {
    return this.http.get(this.dateFilterUrl+"/"+data)
  }
}
