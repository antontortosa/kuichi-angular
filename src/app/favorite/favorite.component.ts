import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {

  @Input('is-favorite') isFav = false;
  @Output('change-event') change = new EventEmitter();
  

  onClickFav(){
      this.isFav = !this.isFav ;
      this.change.emit({newValue: this.isFav});
  }

}

export interface FavChangeEvent{
  newValue:boolean
}