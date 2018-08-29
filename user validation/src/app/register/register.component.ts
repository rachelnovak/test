import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { JsonPipe } from '../../../node_modules/@angular/common';

import { ValidateTz } from '../validators/tz-validation';
import { ValidateCountry } from '../validators/country-validation';
import { ValidateAge } from '../validators/age-validation';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      tz: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), ValidateTz]],
      age: ['', [Validators.required, ValidateAge]],
      male: ['', []],
      country: ['', [Validators.required, ValidateCountry]]
    });
  }

  // get all controls
  get f() {this.registerForm.controls.male.setValue(false);  return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.user = JSON.parse(JSON.stringify(this.registerForm.value));
    this.userService.addUser(this.user);
  }
}
