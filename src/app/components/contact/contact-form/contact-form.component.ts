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

  constructor(private fb: FormBuilder, private afdb: AngularFireDatabase) {
    this.createForm();
   }

   createForm() {
    this.form = this.fb.group({
      'name': ['', Validators.required],
      'mobileNumber': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'message': ['', [ Validators.required, Validators.minLength(20)]],

    });
   }

   onSubmit() {
     if (this.form.dirty && this.form.valid){
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
      this.afdb.list('/messages').push(formRequest);
      this.form.reset();
     }
  }
  ngOnInit() {
  }

}
