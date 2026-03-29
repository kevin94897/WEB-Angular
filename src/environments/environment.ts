// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// SECURITY NOTE: Firebase client-side API keys are designed to be public, but you MUST
// restrict them in the Firebase Console (https://console.firebase.google.com):
// 1. Go to Project Settings > API Keys and restrict by HTTP referrer (your domain).
// 2. Set up Firebase Security Rules to control data access.
// 3. Enable Firebase App Check for additional protection.
// 4. Never store private server keys here — this file is bundled into the client build.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDLTf8QId8o64dcGh4ya33Tj37T8Pgulvc',
    authDomain: 'clase1409.firebaseapp.com',
    databaseURL: 'https://clase1409.firebaseio.com',
    projectId: 'clase1409',
    storageBucket: 'clase1409.appspot.com',
    messagingSenderId: '342027119450',
    appId: '1:342027119450:web:abbda6d36796143db22163'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
