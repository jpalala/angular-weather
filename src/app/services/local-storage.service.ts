import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../todo';

const STORAGE_KEY = 'todolist_items';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  setTodo(todo: Todo) {
    const currentTodoList = localStorage.get(STORAGE_KEY) || [];
    currentTodoList.push(todo);
    localStorage.setItem(STORAGE_KEY, currentTodoList);
  }

  getTodo(uuid: string) {
    let currentTodoList = localStorage.get(STORAGE_KEY) || [];
    return currentTodoList.find((t) => {
       t.id === uuid;
    });
  }

  getTodos(): Array<Todo> {
    return localStorage.get(STORAGE_KEY) || [];
  }

  deleteTodo(uuid: string) {
    let currentTodoList = localStorage.get(STORAGE_KEY) || [];
    const todoList = currentTodoList.filter(t => {
      return t.id != uuid;
    });
    localStorage.setItem(STORAGE_KEY, todoList);
  }

}
