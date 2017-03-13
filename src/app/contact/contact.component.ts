import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Contact } from '../../shared/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  contact: Contact;

  constructor(private _fb: FormBuilder) { 
  }

  ngOnInit() {
    this.contactForm = this._fb.group({
      firstName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
    });
  }

  save(model: Contact) {
    this.submitted = true;
    console.log(model);
  }
}
