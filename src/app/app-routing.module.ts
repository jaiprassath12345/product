import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { AddProductComponent } from './DetailsProduct/add-product.component';
import { OderPlacedComponent } from './oder-placed/oder-placed.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:"products",component:ProductsComponent},
  {path:"carts",component:CartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"payment",component:PaymentComponent},
  {path:"detailList/:id",component:AddProductComponent},
  {path:"order",component:OderPlacedComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
