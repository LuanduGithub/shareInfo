import { Component } from '@angular/core';
import { DataSharedService } from 'src/app/services/models/shared.service';

@Component({
  selector: 'app-form-emit',
  templateUrl: './form.component.html'
})
export class FormEmitComponent{
  public inputEmit = '';
  constructor(private dataSharedService: DataSharedService) {}
  public onSubmit() {
    this.dataSharedService.title$.emit(this.inputEmit)
  }
}
