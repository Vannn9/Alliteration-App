// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideFirestore(() => getFirestore())
    )
  ]
}).catch(err => console.error(err));










// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// import { AppComponent } from './app/app.component'; // Import your root component

// if (environment.production) {
//   enableProdMode();
// }

// const firebaseConfig = environment.firebaseConfig;
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app); // You can remove this line if it's not needed

// platformBrowserDynamic().bootstrapModule(AppComponent as any)
//   .catch(err => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';
// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// import { AppComponent } from './app/app.component'; // Import your root component

// if (environment.production) {
//   enableProdMode();
// }

// const firebaseConfig = environment.firebaseConfig;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize analytics if needed

// bootstrapApplication(AppComponent)
//   .catch(err => console.error(err));




