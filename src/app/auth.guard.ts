import {CanActivateFn, Router} from '@angular/router';
import {Auth} from '@angular/fire/auth';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if(auth.currentUser){
    return true;
  }

  router.navigate(['/login']);
  return false;
};
