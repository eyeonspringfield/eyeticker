import {ApplicationConfig, importProvidersFrom, NgZone, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {firebaseConfig} from '../../env';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {BrowserModule} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [ { provide: NgZone, useFactory: () => new NgZone({ enableLongStackTrace: false }) },importProvidersFrom(BrowserModule), provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp(firebaseConfig)), provideFirestore(() => getFirestore()), provideAuth(() => getAuth())]
};
