import * as firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  }
  firebase.initializeApp(firebaseConfig)
  firebase.firestore()
}
const fireDb = firebase.firestore()
export { fireDb }
