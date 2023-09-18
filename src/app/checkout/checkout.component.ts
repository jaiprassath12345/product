import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentService } from '../service/payment.service';
import { UAddress } from '../Model/Address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private snackBar:MatSnackBar,private fb: FormBuilder,private payment:PaymentService,private router:Router){} 


  addAddress=this.fb.group({
    doorNo: [""],
    street: [""],
    city: [""],
    state: [""],
    zipcode: [""]
  });

  addAddresses(e:Event)
  {
    e.preventDefault();
    this.payment.setaddAddress(<UAddress>this.addAddress.value);

      this.snackBar.open("Address successfully Added", "close", {
        duration: 1000,
        });
        console.log(this.addAddress.value);
        console.log(this.payment.getaddAddress())
        this.router.navigate(['payment']);
        localStorage.setItem('addrress',JSON.stringify(this.addAddress.value));

        
}

  
}
