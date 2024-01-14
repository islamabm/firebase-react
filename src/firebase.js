import { initializeApp } from 'firebase/app';
import { getMessaging, getToken as getFirebaseToken, onMessage } from 'firebase/messaging';

var firebaseConfig = {
    apiKey: "AIzaSyAOH1Yyc2wcxV0g-qCNjCxvkiKPVkweDgA",
    authDomain: "fir-romday.firebaseapp.com",
    projectId: "fir-romday",
    storageBucket: "fir-romday.appspot.com",
    messagingSenderId: "157021754005",
    appId: "1:157021754005:web:5935a743cb021913a7c19c"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

export const requestFirebaseToken = (setTokenFound) => {
    return getFirebaseToken(messaging, { vapidKey: 'BAHvJxaP7BYsPPb-1LrzU5qqKyzKBi9jvLNKb7YxS_9FQXTzwcpB4ei-xXxeEck4rC8eTi92MWlWRa-EjPsI14U' }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
};