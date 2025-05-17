// src/app/profile/profile.component.ts
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Auth, authState, signOut, User } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  user: User | null = null;
  username: string | null = null;
  private sub = new Subscription();

  ngOnInit() {
    // Subscribe to auth state
    this.sub.add(
      authState(this.auth).subscribe(async (u) => {
        if (!u) {
          await this.router.navigate(['/login']);
          return;
        }

        this.user = u;

        try {
          const ref = doc(this.firestore, 'users', u.uid);
          const snap = await getDoc(ref);
          this.username = snap.exists() ? (snap.data() as any).username : null;
        } catch (e) {
          console.error('Error fetching username:', e);
        }
      })
    );
  }

  async logout() {
    await signOut(this.auth);
    await this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
