import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-in-out',
  templateUrl: './form.component.html',
})
export class FormInOutComponent{
  public inputInOut = '';
  @Output() public readonly sendData = new EventEmitter<string>();
  constructor() {}

  public onSubmit(){
    this.sendData.emit(this.inputInOut);
  }
}
