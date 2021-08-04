import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  formRegister: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.validations.fullNamePattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.validations.emailPattern) ], [ this.emailValidator ] ],
    username: [ '', [ Validators.required, this.validations.usernameValidation ] ],
    password1: [ '', [Validators.required, Validators.minLength(6) ] ],
    password2: [ '', [Validators.required]],

  }, {
    validators: [ this.validations.passwordComparator('password1', 'password2') ]
  });

  get emailErrorMsg(): string {
    const error =  this.formRegister.get('email')?.errors;
    if(error?.required){
      return 'email is mandatory';
    }else if(error?.pattern){
      return 'Invalid Format';
    }else if(error?.emailUsed){
      return 'Use a different email';
    }
    return '';
  }

  constructor(private fb: FormBuilder,
              private validations: ValidationsService,
              private emailValidator: EmailValidatorService ) {
  }

  ngOnInit(): void {
    this.formRegister.reset({
      name      : "Carlos Rivera",
      email     : "test1@test.com",
      username  : "crivera1",
      password1: 123456,
      password2: 123456

    });
  }



  fieldsErrorsValidations(field: string){
    return this.formRegister.controls[field].errors 
          && this.formRegister.controls[field].touched;
  }

  save() {

    this.formRegister.markAllAsTouched();
    console.log(this.formRegister.value)
  }

}
