import {Component, inject} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';
import {Auth, onAuthStateChanged} from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatButton, RouterLink, RouterLinkActive, NgClass, MatIconButton, MatIcon, MatDivider, NgIf],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen: boolean = false;
  isLoggedIn: boolean = false;
  auth = inject(Auth);

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      this.isLoggedIn = user !== null;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
