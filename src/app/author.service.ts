import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthors(){
    return ["Antonio", "Antonio tambien", "Semper Antonio"];
  }
}
