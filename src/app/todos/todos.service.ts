import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {}

  getTodos() {
  return this.http.get<any[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );
}

}