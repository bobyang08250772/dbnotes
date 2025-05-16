import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXM26oXFsQPPI_L56xEMo_pwTkPRntdd4",
  authDomain: "dbnotes-d5a86.firebaseapp.com",
  databaseURL: "https://dbnotes-d5a86-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dbnotes-d5a86",
  storageBucket: "dbnotes-d5a86.firebasestorage.app",
  messagingSenderId: "480187997992",
  appId: "1:480187997992:web:ff089f7b40ca76a4d57a1d",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
