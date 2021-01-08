import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCamera,
  faMountain,
  faAmbulance,
  faUmbrellaBeach,
  faGem,
  faPrayingHands,
  faGopuram,
  faArchway,
  faChild,
  faHorse,
  faEllipsisV,
  faHeart,
  faCommentDots,
  faShare
   } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'sakal';
  faCamera=faCamera;
  faAmbulance = faAmbulance;
  faMountain=faMountain;
  faUmbrellaBeach=faUmbrellaBeach;
  faGem=faGem;
  faPrayingHands=faPrayingHands;
  faGopuram=faGopuram;
  faArchway=faArchway;
  faChild=faChild;
  faHorse=faHorse;
  faEllipsisV=faEllipsisV;
  faHeart=faHeart;
  faCommentDots=faCommentDots;
  faShare=faShare;
}
