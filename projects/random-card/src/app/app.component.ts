import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user: any

  // This is nothing but injectable things..
  constructor(private userService:UserService,  private toastr: ToastrService) {}
  
  // Life-cycle hook event.
  ngOnInit(){
    this.userService.getUser().subscribe(
      (user: any) => {
        console.log(user)
        this.user = user.results[0];
      },
      (err)=>{
        this.toastr.error(err.status,"OOps!")
      }
    )
  }

  onSubmit(){
    this.userService.getUser().subscribe(
      (user: any) => {
        console.log(user)
        this.user = user.results[0];
        this.toastr.success("New User Loaded!")
      },
      (err)=>{
        this.toastr.error(err.status,"OOps!")
      }
    )
  }
}
