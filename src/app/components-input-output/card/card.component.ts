import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-in-out',
  templateUrl: './card.component.html',
})
export class CardInOutComponent {
  public textInOutData: string | undefined;
  @Input() set textInOut(val: string | undefined){
    this.textInOutData = val
  };
}
