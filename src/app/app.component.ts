import { Component } from '@angular/core';
import { AddProductComponent } from './Add product/add-product.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';


  isloggedin:boolean=false;


  constructor(private dialog:MatDialog){}
  // private as:AuthService,private rs:RouteService,
  logout()
  {
    // this.isloggedin=this.as.isloggedin;
    // this.as.logout();
  }



  openDialog() {
    this.dialog.open(AddProductComponent, {
  width:'50%',
  height:'50%'

    });
  }

  openDialogLogin() {
  //   this.dialog.open(DialogLoginComponent, {
  // width:'30%',
  // height:'60%'
  //   });
  }


          
}
