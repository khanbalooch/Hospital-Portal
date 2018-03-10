import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { ValidationService } from '../../../shared/services/validation/validation.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  userName:string;
  isHidden: boolean;
  constructor(private fb: FormBuilder, private afdb: AngularFireDatabase) {
    this.createForm();

    this.isHidden = false;
   }

//todo mobile Number validation
   createForm() {
    this.form = this.fb.group({
      'mobileNumber': ['', [Validators.required]],// ValidationService.mobileNumberValidator]],
      'message':      ['', [Validators.required, Validators.minLength(20)]],
      'name':         ['', [Validators.required]],
      'email':        ['', [Validators.required, ValidationService.emailValidator]]
      
    });
   }

   onSubmit() {
     
      const {name, mobileNumber, email, message} = this.form.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Contact Number: ${mobileNumber}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Message: ${message}</div>
      `;
      const formRequest = { name, mobileNumber, email, message, date, html };
      this.afdb.list('/messages').push(formRequest); // submit data to firebase*/
      this.userName = name;
      this.isHidden=true;
      this.form.reset(); // reset complete form todo
  }
  ngOnInit() {
  }

}
