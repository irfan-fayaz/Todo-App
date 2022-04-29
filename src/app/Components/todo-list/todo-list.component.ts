import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList:any =[];
  inputData:any;
  generateId:any
  todoFilter:any;
  constructor() { }

  ngOnInit(): void {
    this.inputData=''
    this.generateId=5
    this.todoFilter='all'
    this.todoList=[
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
    ]

  }
  addData(){
    if(this.inputData.trim().length===0){
      return
    }
      this.todoList.push(
        {
          id:this.generateId,
          title: this.inputData,
          completed:false,
          Editing:false
        }
      )
      this.inputData='';
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
  remaining():number{ 
    return this.todoList.filter((todo:any)=>!todo.completed).length;
  }
  clearCompleted(){
    this.todoList=this.todoList.filter((todo:any)=>!todo.completed)
  }
 filterTodo():any{
   if(this.todoFilter=='all'){
     return this.todoList
   }
   else if (this.todoFilter=='active'){
     return this.todoList.filter((todo:any)=>!todo.completed)
   }
   else if (this.todoFilter=='completed'){
    return this.todoList.filter((todo:any)=>todo.completed)
  }
  return this.todoList
 }
}
