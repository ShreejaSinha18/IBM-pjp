import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UsersDisplay } from './users-display/users-display';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatButtonModule, UsersDisplay],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {

  users: any[] = [];

  constructor(private usersService: UsersService) {

    this.usersService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
      }
    });

  }

}
