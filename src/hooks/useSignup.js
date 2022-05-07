import { useState, useEffect } from 'react'
import { resibeeAuth, resibeeFirestore } from '../config/firebase/config'
import { useAuthContext } from './useAuthContext'
import useFirebaseErrorMessage from './useFirebaseErrorMessage'

import { useNavigation } from '@react-navigation/native'

const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const { signUpErrorMessage, error, setError } = useFirebaseErrorMessage()
  const navigation = useNavigation()

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await resibeeAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      await res.user.updateProfile({ displayName })
      await resibeeFirestore.collection('users').doc(res.user.uid).set({
        online: true,
        displayName,
      })

      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
    catch (err) {
      if (!isCancelled) {
        signUpErrorMessage(err.code)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}

export default useSignup
