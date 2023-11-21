import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountServiceService } from 'src/app/service/account-service.service';
import { DocumentServiceService } from 'src/app/service/document-service.service';

@Component({
  selector: 'app-admin-account-request',
  templateUrl: './admin-account-request.component.html',
  styleUrls: ['./admin-account-request.component.css']
})
export class AdminAccountRequestComponent {

  refreshfun() {
    console.log('refreshfun called');
    location.reload();
  }
  accounts: any[] = [];
  showAccountNotFound=false
  accountRequestTrue=false
  constructor(private auth:AccountServiceService,private doc:DocumentServiceService)
   {
    this.auth.ShowAccountRequest().subscribe(
      {
      next:(data: any) => {
        this.accounts = data;
        this.accountRequestTrue=true
      },
      error:(error:HttpErrorResponse) => {
        console.error('Error fetching accounts:', error);
       this.showAccountNotFound=true
       this.accountRequestTrue=false
      }
    }
    );
   }

   acceptAccount(account:any)
   {
    this.auth.ActivateAccountById(account).subscribe(
      {
        next:(res)=>
        {
          alert("account Activated Successfully")
          location.reload()
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);

          
        }
      }
    )
   } 
   viewDocument(account:any)
   {

   }
  // Assuming 'documents' is an array of bytes representing the image
  searchForm: FormGroup = new FormGroup({
    documentId: new FormControl(''),
  });
documents: any;
imageSource:any
onSubmit(data:any) {
 
  console.log("docId",data);
  
    this.doc.GetuploadDocument(data.documentId).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        this.imageSource = 'data:image/jpeg;base64,' + response.documentData;
        if (response && response.data) {
          // Assuming 'response.data' is the base64-encoded image string
          this.imageSource = 'data:image/jpeg;base64,' + response.data;
        } else {
          console.error('Invalid response from the server');
        }
      },
      error: (error) => {
        console.error('Error fetching image', error);
      }
    });
 
}


   
  
searchCustomerId:any


}
