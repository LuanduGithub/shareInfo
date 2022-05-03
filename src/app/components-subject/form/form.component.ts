import { Component, OnInit } from '@angular/core';
import { DataSharedService } from './../../services/models/shared.service';

@Component({
  selector: 'app-form-subject',
  templateUrl: './form.component.html'
})
export class FormSubjectComponent{
  public inputSubject = '';
  constructor(private dataSharedService: DataSharedService) {}
  public onSubmit() {
    this.dataSharedService.subject$.next(this.inputSubject);
  }
}
