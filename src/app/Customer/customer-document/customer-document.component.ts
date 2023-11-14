import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerServiceService } from 'src/app/service/customer-service.service';
import { DocumentServiceService } from 'src/app/service/document-service.service';

@Component({
  selector: 'app-customer-document',
  templateUrl: './customer-document.component.html',
  styleUrls: ['./customer-document.component.css']
})
export class CustomerDocumentComponent {

  customerDocumentForm=new FormGroup(
    {
      documentType:new FormControl('',Validators.required),
      documentFile: new FormControl('', Validators.required),
      customerId:new FormControl('',Validators.required)
    }
  )

  get TypeValidator()
  {
    return this.customerDocumentForm.get('documentType')
  }
  get FileValidator()
  {
    return this.customerDocumentForm.get('documentFile')
  }
 
  get customerValidator()
  {
    return this.customerDocumentForm.get('customerId')
  }


constructor(private auth:DocumentServiceService){}


  submitData(formData: any) {
    console.log(formData);
    
    this.auth.uploadDocument(formData).subscribe(
      {
        next:(data)=>
        {
          console.log(data);
          
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);
          console.log("error here");
          
          
        }
      }
    )
  }

}
