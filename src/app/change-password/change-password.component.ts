import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form:FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',Validators.required, PasswordValidators.shouldMatchOld],
      newPassword: ['',Validators.required],
      confirmPassword: ['',Validators.required,]
    }, {
      validator: PasswordValidators.shouldMatchNew
    });
  }

  change(f){
    console.log(f);
  }

  get oldPassword(){ return this.form.get('oldPassword');}
  get newPassword(){ return this.form.get('newPassword');}
  get confirmPassword(){ return this.form.get('confirmPassword');}

}
