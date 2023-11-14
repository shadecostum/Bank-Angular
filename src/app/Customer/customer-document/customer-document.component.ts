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
      DocumentType:new FormControl('',Validators.required),
      DocumentFile: new FormControl('', Validators.required),
      CustomerId:new FormControl('',Validators.required)
    }
  )

  get TypeValidator()
  {
    return this.customerDocumentForm.get('DocumentType')
  }
  get FileValidator()
  {
    return this.customerDocumentForm.get('DocumentFile')
  }
 
  get customerValidator()
  {
    return this.customerDocumentForm.get('CustomerId')
  }


constructor(private auth:DocumentServiceService){}

submitData(formData: any) {
  formData.append('DocumentType', this.customerDocumentForm.value.DocumentType);
  formData.append('DocumentFile', this.customerDocumentForm.value.DocumentFile);
  formData.append('CustomerId', this.customerDocumentForm.value.CustomerId);

  this.auth.uploadDocument(formData).subscribe(
    {
      next: (data) => {
        console.log(data);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        console.log("error here");
      }
    }
  );
}


}
