import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailListService } from '../service/detail-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from '../Model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productList: any;
  id: any;
  temp: product = {
    quantity: 1,
    total: 0
  };
  constructor(private cart: CartService, private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, private api: ApiService) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.addDetails();
  }
  addDetails() {
    this.api.getDetail(this.id).subscribe(
      response => {
        this.productList = response;
        Object.assign(this.productList, { quantity: this.temp.quantity, total: this.productList.price })
      })
  }
  addToCart(product: any) {
    this.cart.addToCart(product);
    this.snackBar.open("Item Added to cart", "close", {
      duration: 2000,
    });
  }
  goPlaces() {
    this.router.navigate(['products']);
  }
}
