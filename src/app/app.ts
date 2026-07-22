import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { NgShared } from 'ng-shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, NgShared],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-architecture');
}
