import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharedService {
  public title$ = new EventEmitter<string>();
  public data$ = new BehaviorSubject<string>('');
  public subject$ = new Subject<string>();
  public setData(data: string): void {
    this.data$.next(data);
  }
}
