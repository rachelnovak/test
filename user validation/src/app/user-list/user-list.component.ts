import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 userList:User[];
  constructor(private userService :UserService) { }

  ngOnInit() {
    this.userService.getUsers((userList) => this.userList = userList);
  }

}
