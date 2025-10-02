import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoItem: string = "";

  todos: Todo[] = [];

  saveTodoItem() {
    let newItem;
    newItem = this.todoItem;
    console.log(this.todos)
    this.todos.push({
      id: Date.now(),
      title: newItem,
      completed: false,
    })
    this.todoItem = "";
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    // Bu kod, todos adlı görev listesinden belirli bir id'ye sahip olan görevi silmek için kullanılır.
    // todo => todo.id !== id: Her bir todo nesnesinin id'si, silinmek istenen id ile eşleşmiyorsa listeye dahil edilir.
  }
}
