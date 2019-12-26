import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: string[];
  isActive = true;
  email:string="please enter your email";
  text:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim. Bibendum enim facilisis gravida neque convallis a cras. Ac ut consequat semper viverra. Fames ac turpis egestas integer eget aliquet nibh.";

  constructor(service: AuthorService) { 
      this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  onSave($event){
    console.log("BTN was clicked", $event);
  }

  onDivClicked(){
    console.log("Div was clicked");
  }

  onKeyUp(){
    console.log(this.email);
  }

}
