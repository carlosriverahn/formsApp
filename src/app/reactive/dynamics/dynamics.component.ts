import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [ , [ Validators.required, Validators.minLength(3)] ],
    favorites: this.fb.array( [
      ['Mario Odisey', Validators.required],
      ['Zelda - Breath of the Wild', Validators.required]
    ], Validators.required )
  });

  //option 1
  //addGame: FormControl = new FormControl( '', Validators.required);

  //option 2
  addGame: FormControl = this.fb.control('', Validators.required);

  get favoritesArr(): FormArray {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  fieldsErrorsValidations(field: string) {
    return this.myForm.controls[field].errors
          && this.myForm.controls[field].touched;
  }

  addNewGame() {
    if (this.addGame.invalid) {
      return;
    }

    this.favoritesArr.push( this.fb.control(this.addGame.value, Validators.required));

    console.log(this.addGame.value, 'addGame');
    this.addGame.reset();
  }

  delete(idx: number) {

    console.log(idx)
    this.favoritesArr.removeAt(idx);
  }

  

  save() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  
}
