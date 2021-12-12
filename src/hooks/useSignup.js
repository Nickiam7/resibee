import { useState, useEffect } from 'react'
import { resibeeAuth, resibeeFirestore } from '../config/firebase/config'
import { useAuthContext } from './useAuthContext'

import { useNavigation } from '@react-navigation/native'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
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

      navigation.navigate('Home')

      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
    catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}
