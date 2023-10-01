import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout/checkout.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product: any = [];
  grandTotal!: number;
  constructor(private cart: CartService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.product = res;
      console.log(res)
      this.grandTotal = (parseFloat(this.cart.getTotalPrice().toFixed(2)));
    })
  }
  removeItem(item: any) {
    this.cart.removeCartItem(item)
    this.grandTotal = this.cart.getTotalPrice();
    this.snackBar.open("Item successfully Removed", "close", {
      duration: 2000,
    });
  }
  emptyCart() {
    this.cart.removeAllCart();
    this.snackBar.open("Cart Empty", "close", {
      duration: 2000,
    });
  }
  decrement(id: any) {
    this.cart.decrement(id);
    this.grandTotal = (parseFloat(this.cart.getTotalPrice().toFixed(2)));
  }
  increment(id: any) {
    this.cart.increment(id);
    this.grandTotal = (parseFloat(this.cart.getTotalPrice().toFixed(2)));
  }
  CheckOut() {
    const dialogRef = this.dialog.open(CheckoutComponent);
  }
}
