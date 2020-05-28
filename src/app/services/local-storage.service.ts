import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../todo';
// TODO: Create Tests!
const STORAGE_KEY = 'todolist_items';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
    const todo1 = new Todo();
    todo1.title = "Test";
    todo1.complete = false;
    todo1.id = "test1234412";

    localStorage.setItem(STORAGE_KEY, JSON.stringify(todo1));
  }

  setTodo(todo: Todo) {
    const currentTodoList = localStorage.get(STORAGE_KEY) || [];
    currentTodoList.push(JSON.stringify(todo));
    localStorage.setItem(STORAGE_KEY, currentTodoList);
  }

  getTodo(id: string) {
    let currentTodoList = localStorage.get(STORAGE_KEY) || [];
    const todoItems = JSON.parse(currentTodoList);
    return todoItems.find((t) => {
       t.id === id;
    });
  }

  getTodos(): Array<Todo> {
    const todoItems = localStorage.get(STORAGE_KEY) || [];
    return JSON.parse(todoItems);
  }

  deleteTodo(uuid: string) {
    let currentTodoList = localStorage.get(STORAGE_KEY) || [];
    const todoItems = JSON.parse(currentTodoList);
    todoItems.filter(t => {
      return t.id != uuid;
    });
    localStorage.setItem(STORAGE_KEY, todoList);
  }

}
