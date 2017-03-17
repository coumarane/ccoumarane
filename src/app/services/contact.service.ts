import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Contact } from '../models/contact';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  sendContact(contact: Contact) {
    var headers = new Headers();
    
  }
}
