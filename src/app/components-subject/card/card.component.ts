import { Component, OnInit } from '@angular/core';
import { DataSharedService } from 'src/app/services/models/shared.service';

@Component({
  selector: 'app-card-subject',
  templateUrl: './card.component.html',
})
export class CardSubjectComponent  {
  public subject$ = this.dataSharedService.subject$;
  constructor(private dataSharedService: DataSharedService) {}
}
