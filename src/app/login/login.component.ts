import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatButton,
    MatCheckbox,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: any;
  password: any;

  onLogin() {

  }
}
