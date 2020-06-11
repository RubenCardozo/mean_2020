import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        console.log(users);
        this.users = users;
      },
      (err) => console.log(err)
    );
  }
}
