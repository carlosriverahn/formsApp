import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }


  validate (control: AbstractControl): Observable <ValidationErrors | null> {

    const urlJsonServer = "http://localhost:3000/usuarios?q=";
    const email = control.value;

    return  this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
                      .pipe(
                        // delay(3000),
                        map(email => {
                          return ( email.length === 0 ) ? null : { emailUsed: true }
                        })
    );
   
  }
  
}
