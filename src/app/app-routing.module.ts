import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './Components/todo-list/todo-list.component';

const routes: Routes = [
  {path:':status',component:TodoListComponent},
  {path:'**',redirectTo:'/all'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
