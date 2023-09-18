import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentService } from '../service/payment.service';
import { UAddress } from '../Model/Address';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor( private dialog: MatDialog,private payment:PaymentService,private fb: FormBuilder,private snackBar:MatSnackBar) {
   this.addAddress();
  }

  ngOnInit(): void {
 

  }
  userDetails?:UAddress;

  addAddress() 
  {
    this.userDetails=this.payment.getaddAddress();
    window.localStorage.getItem('addrress');
    console.log(this.userDetails)
  }
  
  checked = false;
  indeterminate = false;
  labelPosition: 'card' | 'upi'|'cash' = 'card';
  disabled = false;

  
 formData=this.fb.group({
    card: [""],
    upi: [""]
  });

  onSubmit() {
  
      console.log("Card or UPI Number: ", this.formData.value);

      
      this.formData.value.card? 
      this.snackBar.open("Paid via Card and Order placed", "close", {duration: 5000,})  :
      this.snackBar.open("Paid via UPI and Order placed", "close", {duration: 5000,});
      
   this.formData.get('card')?.reset();
   this.formData.get('upi')?.reset();
   

  }


}
