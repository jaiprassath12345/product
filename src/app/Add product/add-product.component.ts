import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  arrayName:any[]=[];

 constructor(private fb: FormBuilder) {}
 formData=this.fb.group({
    email: [""],
    password: [""]
  });


  onSubmit() {
    if (this.formData.valid) 
    {
      console.log("Submitting form: ", this.formData.value);
      alert(this.formData.value)
    } 
    else
     {
      console.error("Form is invalid!");
    }
  }
}
