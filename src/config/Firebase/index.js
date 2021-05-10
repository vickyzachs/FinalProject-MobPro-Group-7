import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAm6GZPe59-3kC5zdU_29cQSmLRer4jd6g',
  authDomain: 'u-kost-e0bd2.firebaseapp.com',
  databaseURL: 'https://u-kost-e0bd2-default-rtdb.firebaseio.com',
  projectId: 'u-kost-e0bd2',
  storageBucket: 'u-kost-e0bd2.appspot.com',
  messagingSenderId: '1010317949884',
  appId: '1:1010317949884:web:1040175a83c530dbc409b9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
