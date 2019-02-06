

import { Component, OnInit } from '@angular/core';

import {UserService} from '../users/user.service';
import {UserRequestService} from '../user-http/user-request.service';
import {User} from '../user-class/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService,UserRequestService], //add the providers to the component
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;
  userName=""
  constructor(private userService:UserRequestService){
   this.user=new User("","","",0,0,0,"",new Date())
  }
  submitUser(){
         this.userService.userRequest(this.userName)
}
  ngOnInit() {
    
      this.userService.userRequest('munganyendesandrine')
           
      this.user=this.userService.user
     
  }
 
  }
