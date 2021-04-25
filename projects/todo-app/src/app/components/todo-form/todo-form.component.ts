import { Component, OnInit } from '@angular/core';
import {Todo} from './../../model/Todo'
import { v4 as uuidv4 } from 'uuid';
import {TodoService} from './../../service/todo.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  // declare the variable for title -
  todoTitle: string;
  validation_msg : string = '';
  todoTitleLength : number = 50;
  constructor(private todoService: TodoService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  //validate the AddNote
  validateAdd(){
    //check if title is empty! If yes, then send the correct msg
    if(!this.todoTitle){
      return this.validation_msg = 'Invalid Input'
    }

    //check if title length is greater than some X-chars. If yes, then send the correct msg.
    if(this.todoTitle.length >= this.todoTitleLength){
      return this.validation_msg = 'Todo note is too long, make it shorter.'
    }
  }

  // resetting the title to empty!
  resetTitle(){
    this.todoTitle="";
  }
  
  handleAdd(){
    let valid_msg = this.validateAdd()

    // validate the input payload --
    if(valid_msg){
      // resetting the title to empty!
      this.resetTitle()
      return this.toastr.error(this.validation_msg)
    }else{
    const newTodo: Todo = {
      id: uuidv4(),
      title : this.todoTitle,
      date  : new Date(),
      isComplete : false,
    };

    this.todoService.addTodo(newTodo);
    // resetting the title to empty!
    this.resetTitle()
    return this.toastr.success('Note Added!')
    }
  }
}
