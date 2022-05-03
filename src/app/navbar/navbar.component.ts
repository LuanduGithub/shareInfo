import { Component, Input, OnInit } from '@angular/core';
import { DataSharedService } from '../services/models/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() public titleInOut: string | undefined;
  public textSharedData$ = this.dataSharedService.data$;
  public emitted$ = this.dataSharedService.title$;
  public subject$ = this.dataSharedService.subject$;
  constructor(private dataSharedService: DataSharedService) {}
}
