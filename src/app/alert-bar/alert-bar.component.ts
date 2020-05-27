import { Component, OnInit, Input } from '@angular/core';
import { ConfirmMessageService } from '../services/confirm-message.service';
import { LocalStorageService } from '../services/local-storage.service';

/*
 * confirmation - if (Yes) return true or false
*/
@Component({
  selector: 'app-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.css']
})
export class AlertBarComponent implements OnInit {
  hide: boolean = false;
  @Input() hasConfirm: boolean = false;
  @Input() message: string;

  constructor(private _confirmMessageService: ConfirmMessageService,
    private localStorageService: LocalStorageService
    ) {
    // FOR STUDY: How do you subscribe and then "trigger" events based on the argument
    // PSEUDOCODE:
    // 1) Initializing a event listener/subscriber
    // 2) Triggering the event to let the consuming component should continue or not
  }

  ngOnInit() {

  }

  handleYes($event, taskUUId: string) {
    $event.preventDefault();
    this.localStorageService.deleteTodo(taskUUId);
  }

  handleNo($event) {
    let hide = true;
  }

  dismissAlert() {
    let hide = true;
  }

}
