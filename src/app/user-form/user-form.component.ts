import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {UserRequestService} from '../user-http/user-request.service';
import {UserService} from '../users/user.service'
import {User} from '../user'
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  providers:[UserRequestService],
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
ngOnInit(){}
}

