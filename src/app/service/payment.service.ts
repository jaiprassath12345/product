import { Injectable } from '@angular/core';
import { UAddress } from '../Model/Address';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
address?: UAddress;

  setaddAddress(address:UAddress)
  {
      this.address=address;
      
      console.log(this.address);
     
  }

  getaddAddress()
{
  console.log(this.address);
  return this.address;
}


}
