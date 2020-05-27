import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

const routes = [
  { path: '', component: TodosComponent },
  { path: 'todo/:id', component: TodoItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
