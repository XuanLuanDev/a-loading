import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ALoadingService } from './a-loading.service';

@Component({
  selector: 'a-loading',
  template: `
    <div  class="aloading-container" *ngIf="isLoading == true" [style.background-color]="backdropColor">
      <ng-container [ngSwitch]="type">
         <span *ngSwitchCase="0" class ='aloading-loader0' [style.--color1]="color1" [style.--color2]="color2"></span>
         <span *ngSwitchCase="1"  class ='aloading-loader1'  [style.--color1]="color1" [style.--color2]="color2"></span>
         <span *ngSwitchCase="2"  class ='aloading-loader2'  [style.--color1]="color1" [style.--color2]="color2"></span>
         <span *ngSwitchCase="3"  class ='aloading-loader3'  [style.--color1]="color1" [style.--color2]="color2"></span>
         <span *ngSwitchCase="4"  class ='aloading-loader4'  [style.--color1]="color1" [style.--color2]="color2"></span>
         <span *ngSwitchCase="5"  class ='aloading-loader5'  [style.--color1]="color1" [style.--color2]="color2"></span>
         <span *ngSwitchCase="6"  class ='aloading-loader6'  [style.--color1]="color1" [style.--color2]="color2"></span>
          <span *ngSwitchCase="7"  class ='aloading-loader7'  [style.--color1]="color1" [style.--color2]="color2"></span>
          <span *ngSwitchCase="8"  class ='aloading-loader8'  [style.--color1]="color1" [style.--color2]="color2"></span>
          <span *ngSwitchCase="9"  class ='aloading-loader9'  [style.--color1]="color1" [style.--color2]="color2"></span>
           <span *ngSwitchCase="10"  class ='aloading-loader10'  [style.--color1]="color1" [style.--color2]="color2"></span>
             <span *ngSwitchCase="11"  class ='aloading-loader11'  [style.--color1]="color1" [style.--color2]="color2"></span>
              <span *ngSwitchCase="12"  class ='aloading-loader12'  [style.--color1]="color1" [style.--color2]="color2"></span>
                <span *ngSwitchCase="13"  class ='aloading-loader13'  [style.--color1]="color1" [style.--color2]="color2"></span>
                  <span *ngSwitchCase="14"  class ='aloading-loader14'  [style.--color1]="color1" [style.--color2]="color2"></span>
                   <span *ngSwitchCase="15"  class ='aloading-loader15'  [style.--color1]="color1" [style.--color2]="color2"></span>
                    <span *ngSwitchCase="16"  class ='aloading-loader16'  [style.--color1]="color1" [style.--color2]="color2"></span>
                    <span *ngSwitchCase="17"  class ='aloading-loader17'  [style.--color1]="color1" [style.--color2]="color2"></span>
                    <span *ngSwitchCase="18"  class ='aloading-loader18'  [style.--color1]="color1" [style.--color2]="color2"></span>
                    <span *ngSwitchCase="19"  class ='aloading-loader19'  [style.--color1]="color1" [style.--color2]="color2"></span>
                    <span *ngSwitchCase="20"  class ='aloading-loader20'  [style.--color1]="color1" [style.--color2]="color2"></span>
                    <span *ngSwitchCase="21"  class ='aloading-loader21'  [style.--color1]="color1" [style.--color2]="color2"></span>
         <span *ngSwitchDefault class ='aloading-loader0'  [style.--color1]="color1" [style.--color2]="color2"></span>
       </ng-container>
    </div>

  `,
  styleUrls:['./a-loading.component.scss']
})
export class ALoadingComponent  {
  @Input() isLoading: boolean = false;
  @Input() backdropColor ="rgba(0, 0, 0, 0.32)";
  @Input() color1 ="#fff";
  @Input() color2 ="#FF3D00";
  @Input() type:number =0;
  constructor(){
  
  }
  
}
