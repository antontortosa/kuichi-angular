import { Component } from '@angular/core';
import { FavChangeEvent } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  post = {
    title: 'angular-course',
    isFav: true  
  };

  tweet = {
    body: "Hallo everybody",
    isLiked: false,
    likesCount: 10
  };

  courses = [];

  viewMode = 'map';

  onFavoriteChange(changeArgs:FavChangeEvent){
    console.log("Favorite changed", changeArgs);
  }
}
