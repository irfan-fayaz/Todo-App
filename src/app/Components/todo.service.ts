import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList:any =[];
  generateId:any=5
  constructor() { this.todoList=[
    {
      id:1,
      title:'Install Angular CLI',
      completed:false,
      Editing:false
    },
    {
      id:2,
      title:'Generate Components',
      completed:false,
      Editing:false
    },
    {
      id:3,
      title:'Routing and Lazy Loading',
      completed:false,
      Editing:false
    },
    {
      id:4,
      title:'Input Output Decorators',
      completed:false,
      Editing:false
    }
  ] }

  add(data:any){
    if(data.trim().length===0){
      return
    }
      this.todoList.push(
        {
          id:this.generateId,
          title: data,
          completed:false,
          Editing:false
        }
      )
      data='';
      this.generateId++
  }
  deleteItem(id:number){
    this.todoList=this.todoList.filter((todo:any) => todo.id !==id)
  }
  editTodo(todo:any):void{
    todo.Editing=true
  }
  completeEdit(todo:any){
    todo.Editing=false
  }

  clearCompleted(){
    this.todoList=this.todoList.filter((todo:any)=>!todo.completed)
  }
  todoFilter(filter:any){
    if(filter=='all'){
      return this.todoList
    }
    else if (filter=='active'){
      return this.todoList.filter((todo:any)=>!todo.completed)
    }
    else if (filter=='completed'){
     return this.todoList.filter((todo:any)=>todo.completed)
   }
   return this.todoList
  }
}
