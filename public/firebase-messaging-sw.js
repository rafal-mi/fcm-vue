import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

console.log(`Before app initialization`);

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC9-UHLl-UcS07kGEVkNzO55ue1W1S36pY",
  authDomain: "vue-3-58a4a.firebaseapp.com",
  databaseURL: "https://vue-3-58a4a-default-rtdb.firebaseio.com",
  projectId: "vue-3-58a4a",
  storageBucket: "vue-3-58a4a.appspot.com",
  messagingSenderId: "392490919863",
  appId: "1:392490919863:web:708153599c557a4eebea32"
});

console.log(`App initialized`);

const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});


