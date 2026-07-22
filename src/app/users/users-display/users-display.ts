import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-display.html',
  styleUrl: './users-display.scss',
})
export class UsersDisplay {

  @Input() users: any[] = [];

}
