import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  allUsersList: Array<any> = new Array<any>();

  constructor(
    private location: Location,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.listAllUsers();
  }

  onGoBack() {
    this.location.back();
  }
  onNewAdd() {
    this.router.navigate(['/add-user']);
  }

  listAllUsers() {
    this.userService.listAllUsers().subscribe({
      next: (response: any) => {
        console.log("all users listed: ", response);
        this.allUsersList = response.users;
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }

  onDeleteClick(id: number) {
    this.userService.deleteUserById(id).subscribe(
      {
        next: (response: any) => {
          this.listAllUsers();
        }
      }
    );
  }
}