import { Component, OnInit } from '@angular/core';
import { DataSharedService } from 'src/app/services/models/shared.service';

@Component({
  selector: 'app-card-emit',
  templateUrl: './card.component.html'
})
export class CardEmitComponent {
  public emitted$ = this.dataSharedService.title$;
  constructor(private dataSharedService: DataSharedService) {}
}
