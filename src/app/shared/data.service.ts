/* eslint-disable */

import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('this is a test!', false),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio sunt perspiciatis consectetur molestiae reiciendis exercitationem consequatur quisquam alias ipsam velit, quidem assumenda id explicabo temporibus. Culpa laudantium quo tempore', true)
  ]

  constructor() { 

  }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}


