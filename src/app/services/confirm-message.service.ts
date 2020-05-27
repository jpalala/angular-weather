import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ConfirmMessageService {
  private _listeners = new Subject<any>();
  private isConfirmed: boolean = false;

  constructor() { }

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  unconfirm() {
    this.isConfirmed = false;
    return this.isConfirmed;
  }

  confirm(taskUUId: string) {
    this.isConfirmed = true;
    return taskUUId;
  }
}
