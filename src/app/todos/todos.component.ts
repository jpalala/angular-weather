import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Array<Todo>;

  constructor(private lss: LocalStorageService) {}

  ngOnInit() {
    this.todos = this.lss.getTodos();
  }

}
