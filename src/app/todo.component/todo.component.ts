import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent implements OnInit {

  todoItem: string = ""; // two-way binding ile alınan değer html de ( <input type="text" [(ngModel)]="todoItem" placeholder="Add new.."> )  
  todos: Todo[] = []; // Todo[] interface inde tanımladığımız yapıyı todos a aktardık 

  // OnInit bileşen ilk yüklendiğinde çalışır, ngOnInit() metodu, bileşen DOM'a yüklendikten hemen sonra çalışır
  // Local Storage'dan veri çekmek, API'den veri almak, Başlangıç ayarlarını yapmak 
  ngOnInit() {
    // en başta localStorage daki verileri çekiyoruz
    const savedData = localStorage.getItem('todos');
    if (savedData) {
      this.todos = JSON.parse(savedData);
    }
  }
  //add 
  saveTodoItem() {
    let newItem;
    newItem = this.todoItem;
    console.log(this.todos)

    // eğer bir girdi varsa
    if (newItem != "") {
      //todos arrayine bir öğe ekliyoruz öğenin title ı girdiğimiz string oluyor
      this.todos.push({
        id: Date.now(),
        title: newItem,
        completed: false,
      })
      // en son girdi kısmını temizliyoruz
      this.todoItem = "";
    }
    else {
      alert("Please write something :)") // eğer girdi olmamışsa
    }
    //localStorage.setItem("key", value)
    localStorage.setItem('todos', JSON.stringify(this.todos)); // localstorage a güncel todos listesini kaydediyoruz ki yenilenenince liste silinmesin
  }

  //remove
  removeTodo(id: number) {
    const confirmed = window.confirm('Are you sure do you wanna delete?'); // eğer confirm mesajı okaylenirse true döner
    if (confirmed) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      // Bu kod, todos adlı görev listesinden belirli bir id'ye sahip olan görevi silmek için kullanılır.
      // todo => todo.id !== id: Her bir todo nesnesinin id'si, silinmek istenen id ile eşleşmiyorsa listeye dahil edilir.

      localStorage.setItem('todos', JSON.stringify(this.todos)); // güncel listeyi localStorage a kaydediyoruz
      console.log("deleted")
    }
    else {
      console.log("not deleted")
    }
  }
}
