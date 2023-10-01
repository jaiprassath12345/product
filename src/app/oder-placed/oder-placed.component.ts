import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oder-placed',
  templateUrl: './oder-placed.component.html',
  styleUrls: ['./oder-placed.component.css']
})
export class OderPlacedComponent {
  constructor(private router:Router){} 

  shopNow(){
   
    this.router.navigate(['products']);

}

}
