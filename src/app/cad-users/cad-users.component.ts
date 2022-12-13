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
    username = username.trim();
    email = email.trim();
    street = street.trim();
    suite = suite.trim();
    city = city.trim();
    zipcode = zipcode.trim();
    lat = lat.trim();
    lng = lng.trim();

    if (!name) { return; }
    this.userService.addUsers({name, username, email, street, suite, city, zipcode, lat, lng } as unknown as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }
}
