import { Directive, Input } from '@angular/core';
import { FormControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[CustomMin] [ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator { 

    @Input() minimum!: number;

    validate( control: FormControl){
        const inputValue = control.value
        return (inputValue < this.minimum) 
                ? { 'customMin': true } 
                : null
    }


}