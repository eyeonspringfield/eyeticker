import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatButton, RouterLink, RouterLinkActive, NgClass, MatIconButton, MatIcon, MatDivider],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
