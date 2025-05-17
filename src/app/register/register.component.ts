import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {Auth, createUserWithEmailAndPassword, getAuth} from '@angular/fire/auth';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

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
  auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  async onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      console.log('User registered:', userCredential.user);
      const user = userCredential.user;

      await addDoc(collection(this.firestore, 'users'), {
        uid: user.uid,
        username: this.username,
        email: this.email,
        createdAt: new Date(),
      });
      await this.router.navigate(['/home']);
    } catch (error: any) {
      console.error('Signup error:', error);
      alert(`Signup failed: ${error.message}`);
    }
  }
}
