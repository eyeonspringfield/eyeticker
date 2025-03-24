import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-register',
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatButton,
    MatLabel,
    MatCheckbox
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: any;
  email: any;
  password: any;
  confirmPassword: any;

  onSignup() {

  }
}
