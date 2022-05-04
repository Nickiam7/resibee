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
  return { error, setError, loginErrorMessage }
}

export default useFirebaseErrorMessage
