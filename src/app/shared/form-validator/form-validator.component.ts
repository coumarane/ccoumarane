import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormValidationService } from '.././form-validation.service';

@Component({
  selector: 'app-form-validator',
  template: '<div class="alert-danger" *ngIf="errorMessage !== null">{{errorMessage}}</div>'
  // templateUrl: './form-validator.component.html',
  // styleUrls: ['./form-validator.component.css']
})
export class FormValidatorComponent implements OnInit {
  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for(let propertyName in this.control.errors) {
      //console.log(propertyName);
      if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
