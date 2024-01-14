// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import { Button, Row, Col, Toast } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { requestFirebaseToken, onMessageListener } from './firebase';
// // import { onMessageListener } from './firebase';
// function App() {

//   const [show, setShow] = useState(false);
//   const [notification, setNotification] = useState({ title: '', body: '' });
//   const [isTokenFound, setTokenFound] = useState(true);
//   requestFirebaseToken(setTokenFound)

//   onMessageListener().then(payload => {
//     setShow(true);
//     setNotification({ title: payload.notification.title, body: payload.notification.body })
//     console.log("Message recieved", payload);
//   }).catch(err => console.log('failed: ', err));

//   return (
//     <div className="App">
//       <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
//         position: 'absolute',
//         top: 20,
//         right: 20,
//         minWidth: 200
//       }}>
//         <Toast.Header>
//           <img
//             src="holder.js/20x20?text=%20"
//             className="rounded mr-2"
//             alt=""
//           />
//           <strong className="mr-auto">{notification.title}</strong>
//           <small>just now</small>
//         </Toast.Header>
//         <Toast.Body>{notification.body}</Toast.Body>
//       </Toast>
//       <header className="App-header">
//         {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
//         {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
//         <img src={logo} className="App-logo" alt="logo" />
//         <Button onClick={() => setShow(true)}>Show Toast</Button>
//       </header>


//     </div>
//   );
// }
// export default App;


import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { requestFirebaseToken, onMessageListener } from './firebase';

function Home() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [isTokenFound, setTokenFound] = useState(true);
  requestFirebaseToken(setTokenFound)

  onMessageListener().then(payload => {
    setShow(true);
    setNotification({ title: payload.notification.title, body: payload.notification.body })
    console.log("Message received", payload);
  }).catch(err => console.log('failed: ', err));

  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
        position: 'absolute',
        top: 20,
        right: 20,
        minWidth: 200
      }}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
      <header className="App-header">
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header>
    </>);
}

function Hello() {
  return <h1>Hello world!</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/hello">Hello</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
