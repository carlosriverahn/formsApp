import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  public fullNamePattern: string = "([a-zA-Z]+) ([a-zA-Z]+)"
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  
  constructor() { }
  
  usernameValidation(control: FormControl): ValidationErrors | null {
    const data = control.value
    if (data === "crivera") {
      return {
        username: true
      }
    }
    return null
  }

  passwordComparator(password1: string, password2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(password1)?.value;
      const pass2 = formGroup.get(password2)?.value;
      
      if (pass1 !== pass2) {
        formGroup.get(password2)?.setErrors({ notEquals: true })
        return {
          notEquals: true
        }
      }

      formGroup.get(password2)?.setErrors( null );
      return null

    }

  }

}
