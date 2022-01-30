import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  // Paste configuration object from project settings page
  // in Firebase console of your app
}

firebase.initializeApp(firebaseConfig)

const resibeeFirestore = firebase.firestore()
const resibeeAuth = firebase.auth()
const resibeeStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export {
  resibeeAuth,
  resibeeFirestore,
  resibeeStorage,
  timestamp
}
