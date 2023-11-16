import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-two-date-filter',
  templateUrl: './two-date-filter.component.html',
  styleUrls: ['./two-date-filter.component.css']
})
export class TwoDateFilterComponent {

  
  result: any[] = [];
  resultcondition = false;
  dateData: any;
  resultArray=false;

  constructor(private auth:CustomerServiceService){}
  
  onSubmit() {
    this.auth.twoDateFilter(this.dateData).subscribe(
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
  

}
