import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // @Output() messageSource: new BehaviorSubject<string>("default message");
  private messageSource = new BehaviorSubject<string>("helo world");
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeTitle(title) {
    this.messageSource.next(title);
  }

}