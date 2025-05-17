import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {Router} from '@angular/router';

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
  email = '';
  password = '';

  private auth = inject(Auth);
  private router = inject(Router);

  async onLogin() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const cred = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      await this.router.navigate(['/home']);
    } catch (err: any) {
      console.error('Login error:', err);
      alert(`Login failed: ${err.message}`);
    }
  }
}
