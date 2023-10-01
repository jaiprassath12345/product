import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentService } from '../service/payment.service';
import { UAddress } from '../Model/Address';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../service/cart.service';
import { OderPlacedComponent } from '../oder-placed/oder-placed.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  userDetails?: UAddress;
  gwt?: UAddress;
  grandTotal!: number;

  constructor(private dialog: MatDialog, private payment: PaymentService, private fb: FormBuilder, private snackBar: MatSnackBar,
    private cart: CartService) 
  {
    this.addAddress();
    this.gwt
  }

  ngOnInit(): void 
  {
    this.grandTotal = (parseFloat(this.cart.getTotalPrice().toFixed(2)));
  }
 
  addAddress() 
  {
    this.userDetails = this.payment.getaddAddress();
    this.gwt = JSON.parse(localStorage.getItem('addrress') || '{}');
  }
  checked = false;
  indeterminate = false;
  labelPosition: 'card' | 'upi' | 'cash' = "cash";
  disabled = false;
  formData = this.fb.group({
    card: [""],
    upi: [""]
  });
  onSubmit()
  {
    console.log("Card or UPI Number: ", this.formData.value);
    this.formData.value.upi ?
    this.snackBar.open("Paid via UPI and Order placed", "close", { duration: 5000, }) :
    this.snackBar.open("Paid via Card and Order placed", "close", { duration: 5000, })
    this.formData.get('card')?.reset();
    this.formData.get('upi')?.reset();
  }
  order() {
    const dialogRef = this.dialog.open(OderPlacedComponent);
  }
}
