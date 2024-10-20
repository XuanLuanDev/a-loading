import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a-loading-sample';
  type =1;
  types:any[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  color1="#FFFFFF";
  color2="#00FF00";
  backdropColor="#BBBBBB";
}
