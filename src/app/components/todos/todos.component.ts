import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos?:Todo[];

  inputTodos:string = ""

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First App',
        complete: false
      },
      {
        content: 'Second App',
        complete: true
      },
      {
        content: 'Third App',
        complete: false
      }
    ]
  }

  toggleDone(id:number):void {
    this.todos?.map ((v, i) => {
      if (i == id) v.complete =  !v.complete

      return v
    })
  }

  deleteTodo(id:number):void {
    this.todos = this.todos?.filter((v, i) => i !== id)
  }

  addTodo() {
    this.todos?.push({
      content: this.inputTodos,
      complete: false
    }) 
    this.inputTodos = ""
  }

}
