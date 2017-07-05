import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class TodoService {
  private readonly url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http, private ngRedux: NgRedux<any>) {

  }

  loadTodos() {
    this.ngRedux.dispatch({ type: 'FETCH_TODOS_REQUEST' });
    this.http.get(this.url).subscribe(todos => {
      this.ngRedux.dispatch({ type: 'FETCH_TODOS_SUCCESS', todos: todos.json() });
    }, err => {
      this.ngRedux.dispatch({ type: 'FETCH_TODOS_ERROR' });
    });
  }

  addTodo(todo) {
    return this.http.post(this.url, todo);
  }
}
