import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const VAPID_KEY = "BIx8Bl2T-kBOhQe6sEmyVACq88kQYXyBLnY5dczglM9pN90_8OnmyQWEGkouz4EjypVKA79nxDaROU3jqNaw0SM";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC9-UHLl-UcS07kGEVkNzO55ue1W1S36pY",
  authDomain: "vue-3-58a4a.firebaseapp.com",
  databaseURL: "https://vue-3-58a4a-default-rtdb.firebaseio.com",
  projectId: "vue-3-58a4a",
  storageBucket: "vue-3-58a4a.appspot.com",
  messagingSenderId: "392490919863",
  appId: "1:392490919863:web:708153599c557a4eebea32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, { vapidKey: VAPID_KEY }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

const nothing = 0;

export {
  nothing
}

