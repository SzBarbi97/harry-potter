import { Directive, Input, OnInit } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[customValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }
  ],
})
export class CustomValidatorDirective implements Validator, OnInit {

  @Input('customValidator') customValidator: Array<string> = [];

  constructor() {
  }

  ngOnInit() {
  }

  validate(formControl: FormControl): ValidationErrors | null {
    if (!!this.customValidator.filter(name => name.includes(formControl.value)).length) {
      return null;
    }
    return { 'invalid': true };
  }

}
