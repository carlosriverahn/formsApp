import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    productName: "NVIDIA RTX 4080i",
    price: 1599,
    inventory: 5
  }

  

  constructor() { }

  ngOnInit(): void {
  }

  validationName():boolean{
    return this.myForm?.controls.product?.invalid &&
           this.myForm?.controls.product?.touched
  }

  validationPrice():boolean{
    return this.myForm?.controls.price?.invalid &&
           this.myForm?.controls.price?.touched
  }



  // save( data: NgForm ){
  save(){
    this.myForm.resetForm();
    console.log(this.myForm)
  }

}
