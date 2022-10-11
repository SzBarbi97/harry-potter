import {Directive, Input, OnInit} from "@angular/core";
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[ifValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: IfValidatorDirective, multi: true}
  ],
})
export class IfValidatorDirective implements Validator, OnInit {

  @Input('ifValidator') ifValidator: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  validate(formControl: FormControl): ValidationErrors | null {
    console.log('ifvalidator');
    if (this.ifValidator) {
      return null;
    }
    return {'invalid': true};
  }

}
