import { Injectable } from '@angular/core';
import BehaviorSubject from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // @Output() messageSource: new BehaviorSubject<string>("default message");
  private _messageSource = new BehaviorSubject<string>("hello");
  currentMessage = this._messageSource.asObservable();

  constructor() {}

  changeMessage(message: String) {
    this._messageSource.next(message);
  }

}