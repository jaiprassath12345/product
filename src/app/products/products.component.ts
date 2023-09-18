import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { product } from '../Model/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList:any;

  constructor(private api:ApiService,private cart:CartService,private snackBar:MatSnackBar)
  {
    this.Products()
  }

temp:product={
  quantity: 1,
  total: 0
};
Products()
{
  this.api.getProduct().subscribe(
    response=> {this.productList=response

      this.productList.forEach((a:any) => {
       Object.assign(a,{quantity:this.temp.quantity,total:a.price})

       });
    //  console.log(response)
     
   }); 
 
 
}

addToCart(product:any)
{
    this.cart.addToCart(product);
    this.snackBar.open("Item Added to cart", "close", {
      duration: 2000,
      });
}
}
