import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormValidationService } from '../shared/form-validation.service';

import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // Form name
  public contactForm: FormGroup;
  
  public events: any[] = [];

  // Boolean indicate whether the form is validated or not
  private _isFormValid: boolean;

  private _isFormSubmit: boolean;

  // Google reCaptcha Key : <see cref="https://www.google.com/recaptcha/intro/invisible.html" />
  public captchaSiteKey = '6LePyBgUAAAAAGkE6UfzR3hjzKloEGOk0da5S1zn';

  // Response sent by Google when check the captcha input box
  private _captchaResponse: string;

  // Model contact
  contact: Contact;

  constructor(private _fb: FormBuilder) { 
  }

  ngOnInit() {
    this.contactForm = this._fb.group({
      first_name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      last_name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      email: ['', [Validators.required, FormValidationService.emailValidator]],
      address: this._fb.group({
        address1: '',
        address2: '',
        post_code: '',
        city: '',
        country: ''
      }),
      message: ''
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  errorMessageEmail(): any {
    if (this.contact.email === '') {
      return 'Email is required!';
    } else if (!this.validateEmail(this.contact.email)) {
      return 'Email is invalid!';
    } else {
      return false;
    }
  }

  resolved(captchaResponse: string) {
    this._captchaResponse = captchaResponse;
    //console.log(`Resolved captcha with response ${captchaResponse}:`);
    if((typeof this._captchaResponse!='undefined' && this._captchaResponse)) {
      this._isFormValid = true;
    }
  }
  
  save(model: Contact) {
    if (this.contactForm.dirty && this.contactForm.valid && this._isFormValid) {
      //alert(`Name: ${this.contactForm.value.first_name} Email: ${this.contactForm.value.email}`);
      this._isFormSubmit = true;
    }
    
    console.log(model);
  }

  /** 
   * 
  */
  isFormValid() {
    return this._isFormValid;
  }

  isFormSubmit() {
    return this._isFormSubmit;
  }
}
