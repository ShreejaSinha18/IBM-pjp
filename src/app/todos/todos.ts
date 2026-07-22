import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {

  title = 'Todos';

  todos: any[] = [];

  constructor(private todosService: TodosService) {

    this.todosService.getTodos().subscribe({
      next: (data) => {
        this.todos = data;
      }
    });

  }
}