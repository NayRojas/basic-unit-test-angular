import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  text = 'Form page :D';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: '',
  };
  submitted = false;

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email,
      ]),
      text: new FormControl(this.contact.text, [Validators.required]),
    });
  }

  onSubmit(): void {
    console.log(this.submitted);
    this.submitted = true;
    console.log(this.submitted);
  }

  ngOnInit(): void {}
}
