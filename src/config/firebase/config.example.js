import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  // Configuration object from project settings page
  // goes here.
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export {
  auth,
  firestore,
  storage,
  timestamp
}
