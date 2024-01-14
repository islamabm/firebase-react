importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyAOH1Yyc2wcxV0g-qCNjCxvkiKPVkweDgA",
    authDomain: "fir-romday.firebaseapp.com",
    projectId: "fir-romday",
    storageBucket: "fir-romday.appspot.com",
    messagingSenderId: "157021754005",
    appId: "1:157021754005:web:5935a743cb021913a7c19c"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});