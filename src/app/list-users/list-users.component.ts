import { Component } from '@angular/core';
import { User } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) { } 

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users );
  }

}
