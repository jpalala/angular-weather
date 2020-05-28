import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Todo } from 'src/app/Todo';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { CommunicationService } from '../communication.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todo: Todo;
  title: string;
  // ?  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
    private _communicationService: CommunicationService,
    private _localStorageService: LocalStorageService) { }

  ngOnInit() {
    this._communicationService.currentMessage.subscribe(title => this.title = title);
    const todoId = this.route.snapshot.paramMap.get('id');
    this.todo = this._localStorageService.getTodo(todoId);
  }

  editTodo(todo: Todo) {
      console.log("TODO: ", todo);
  }


}
