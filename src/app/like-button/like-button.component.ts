import { Component, OnInit, Input } from '@angular/core';
import * as octicons from '@primer/octicons';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {

  @Input('likesCount') currentLikes:number;
  @Input('isActive')stateSelected:boolean;
  svgIcon = octicons["heart"].toSVG();

  onClickLike($event){
    this.stateSelected = !this.stateSelected;
    this.currentLikes += this.stateSelected?1:-1;
  }

}
