import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { ProductsComponent } from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CartService
 {


  cartItemList:any=[];
  productList=new BehaviorSubject<any>([]);
  List:any;


  constructor(private api:ApiService,) { }

  getProducts()
  {
    return this.productList.asObservable();
  }

  setProduct(product:any)
  {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  idPresent(id:number)
  {
      return this.cartItemList.some((cart:any)=>cart.id===id)
  }


  addToCart(product :any)
  {
   if(this.idPresent(product.id))
    {
     this.increment(product.id);
      // console.log("Already present"+product.id);
    }
   else
   {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log(this.cartItemList);
   }
  }

  getTotalPrice():number
  {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.total*a.quantity;
    })
    return grandTotal;
  }

  removeCartItem(product:any)
  {
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }

  removeAllCart()
  {
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }

  increment(id:any)
  {
  this.cartItemList.forEach((a:any) => {
    if(id===a.id)
    {
    a.quantity++
    }});
  }

  decrement(id:any)
  {
  
    this.cartItemList.map((a:any) =>
     { 
      if(id===a.id)
      {  
        a.quantity--
      }})
    }

  }
  


