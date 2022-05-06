import { useState } from 'react'

const useFirebaseErrorMessage = () => {
  const [error, setError] = useState(null)

  const loginErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
      case 'auth/wrong-password':
        setError('Username or password is incorrect.');
        break;
      default:
        setError('An error has occured. Our team has been notified and we\'re working on it now. Thank you for your patience.')
    }
  }
  const signUpErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        setError('Please use a valid email address. ');
        break;
      case 'auth/weak-password':
        setError('Your password must be at leaset 6 characters long.');
        break;
      case 'auth/weak-password':
        setError('This email is already in use.');
        break;
      default:
        setError('An error has occured. Our team has been notified and we\'re working on it now. Thank you for your patience.')
    }
  }
  return { error, setError, loginErrorMessage, signUpErrorMessage }
}

export default useFirebaseErrorMessage
