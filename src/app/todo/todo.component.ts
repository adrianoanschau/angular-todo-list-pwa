import { Component, OnInit } from '@angular/core';

export class Todo {
  desc: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  todo: Todo = new Todo();

  constructor() { }
  ngOnInit() {
  }
  save(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    this.todo = new Todo();
    this.todos = Object.assign([], this.todos);
  }
  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

}
