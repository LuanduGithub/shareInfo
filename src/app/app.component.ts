import { Component } from '@angular/core';
import { DataSharedService } from './services/models/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public textInOut: string | undefined;
  public dataReceived(event: string | undefined): void {
    this.textInOut = event;
  }
  public textSharedData$ = this.dataSharedService.data$;
  public emitted$ = this.dataSharedService.title$;
  public subject$ = this.dataSharedService.subject$;
  constructor(private dataSharedService: DataSharedService) {}
}
