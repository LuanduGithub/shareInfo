import { Component, Input, SimpleChange, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-card-in-out",
  templateUrl: "./card.component.html",
})
export class CardInOutComponent {
  /**
   * this option is with a setter
   * if you want to test this option uncomment the following piece of code and comment the other code from line 19 to line 23.
   */

  /*  public textInOutData: string | undefined;
  @Input() set textInOut(val: string | undefined) {
    this.textInOutData = val;
  } */

  public textInOutData: SimpleChange | undefined;
  @Input() textInOut: string | undefined;
  public ngOnChanges(changes: SimpleChanges) {
    this.textInOutData = changes.TextInOut.currentValue;
  }
}
