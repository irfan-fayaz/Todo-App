import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}
  public filters: any = 'all';
  public inputData: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.filters = params['status'];
    });
  }
  addData() {
    this.todoService.add(this.inputData);
    this.inputData = '';
  }
  editTodo(todo: any) {
    this.todoService.editTodo(todo);
  }
  completeEdit(todo: any) {
    this.todoService.completeEdit(todo);
  }
  deleteItem(value: any) {
    this.todoService.deleteItem(value);
  }
  clearCompleted() {
    this.todoService.clearCompleted();
  }
  remaining(): number {
    return this.todoService.todoList.filter((todo: any) => !todo.completed)
      .length;
  }
  filterTodo() {
    return this.todoService.todoFilter(this.filters);
  }
}
