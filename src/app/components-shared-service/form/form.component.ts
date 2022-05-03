import { Component } from '@angular/core';
import { DataSharedService } from './../../services/models/shared.service';

@Component({
  selector: 'app-form-shared',
  templateUrl: './form.component.html',
})
export class FormSharedComponent {
  public inputShared = '';
  constructor(private dataSharedService: DataSharedService) {}
  public onSubmit() {
    this.dataSharedService.setData(this.inputShared);
  }
}
