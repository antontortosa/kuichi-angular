import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id:1, name: 'Email'},
    {id:2, name: 'Mobile phone'},
    {id:3, name: 'Owl'},
    {id:4, name: 'Telepathy'}
  ]

  submit(f){
    console.log(f);
  }

}
