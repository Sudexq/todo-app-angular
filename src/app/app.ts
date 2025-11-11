// todo-app\src\app\app.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from "./todo.component/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
