import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDaR7xn1FlEHrZTICtZGbbbSP99fwgQ-PE',
  authDomain: 'ukost-5f0df.firebaseapp.com',
  databaseURL: 'https://ukost-5f0df-default-rtdb.firebaseio.com',
  projectId: 'ukost-5f0df',
  storageBucket: 'ukost-5f0df.appspot.com',
  messagingSenderId: '906015109511',
  appId: '1:906015109511:web:e067c2987458ce37d96322',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
