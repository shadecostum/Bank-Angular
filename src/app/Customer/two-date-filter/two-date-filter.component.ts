import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-two-date-filter',
  templateUrl: './two-date-filter.component.html',
  styleUrls: ['./two-date-filter.component.css']
})
export class TwoDateFilterComponent {

  dateFilterForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });
  transactions: any;
  constructor(private auth:CustomerServiceService){}
  onSubmit(data:any)
  {
    this.auth.twoDateFilter(data).subscribe(
      {
        next:(data)=>
        {
          console.log(data);
          this.transactions =data;
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);
          
        }
      }
    )
  }

}
