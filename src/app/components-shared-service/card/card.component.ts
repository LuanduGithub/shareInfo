import { Component} from '@angular/core';
import { DataSharedService } from './../../services/models/shared.service';

@Component({
  selector: 'app-card-shared',
  templateUrl: './card.component.html'
})
export class CardSharedComponent {
  public textSharedData$ = this.dataSharedService.data$;
  constructor(private dataSharedService: DataSharedService) {}
}
