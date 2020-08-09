import * as firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBiUhA6ehPJPn4UpO23w-Tt-F2bx9STWdU',
    authDomain: 'buildbrother-1.firebaseapp.com',
    databaseURL: 'https://buildbrother-1.firebaseio.com',
    projectId: 'buildbrother-1',
    storageBucket: 'buildbrother-1.appspot.com',
    messagingSenderId: '1009278517698',
    appId: '1:1009278517698:web:05b76a68006e2afc91165b',
  }
  firebase.initializeApp(firebaseConfig)
  firebase.firestore()
}
const fireDb = firebase.firestore()
export { fireDb }
