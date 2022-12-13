import { Component } from '@angular/core';
import { User } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cad-users',
  templateUrl: './cad-users.component.html',
  styleUrls: ['./cad-users.component.css']
})
export class CadUsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) { } 

  add(name: string, username: string, email: string, street: string, suite: string, city: string, zipcode: string, lat: string, lng: string): void {
    name = name.trim();
    username = name.trim();
    email = name.trim();
    street = name.trim();
    suite = name.trim();
    city = name.trim();
    zipcode = name.trim();
    lat = name.trim();
    lng = name.trim();

    if (!name) { return; }
    this.userService.addUsers({name, username, email, street, suite, city, zipcode, lat, lng } as unknown as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }
}
