import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
