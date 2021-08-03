import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: [ '', Validators.required ],
    notifications: [ true, Validators.required ],
    contract: [ '', Validators.requiredTrue ]
  });

  people = {
    gender: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.people,
      contract: false
    });

    //create a Observable to update params in the object people
    this.myForm.valueChanges.subscribe(({contract, ...rest}) => {
      this.people = rest;
    })
    this.myForm.get('contract')?.valueChanges.subscribe(console.log)

  }

  save(){
    if(this.myForm.invalid){
      return;
    }
    console.log("Hola");


    this.myForm.reset();
  }

}
