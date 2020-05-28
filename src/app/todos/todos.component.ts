import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from '../todo';
import { LocalStorageService } from '../services/local-storage.service';
import { CommunicationService } from '../communication.service';

// import { TodoInputComponent } from '../todo-input/todo-input.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Array<Todo>;
  checkConfirm: boolean = false;
  message: string = 'Confirm?';

  @Output() confirm = new EventEmitter();

  constructor(private _localStorageService: LocalStorageService, private _communication: CommunicationService) {}

  ngOnInit() {
    this.todos = this._localStorageService.getTodos();
    this._communication.currentMessage.subscribe(message => this.message = message);

  }

  // event to
  onConfirm() {
    this.checkConfirm = true;
    //$event.
  }
}
