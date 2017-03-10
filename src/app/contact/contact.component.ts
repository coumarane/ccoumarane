import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Contact } from '../../shared/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(/*private _fb: FormBuilder*/) { }

  ngOnInit() {
    // this.myForm = this._fb.group({
    //   firstName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
    //   address: this._fb.group({
    //         address1: new FormControl('', <any>Validators.required),
    //         postCode: new FormControl('8000')
    //     })
    // });
  }

  save(model: Contact, isValid: boolean) {
    this.submitted = true;
    console.log(model, isValid);
  }
}
