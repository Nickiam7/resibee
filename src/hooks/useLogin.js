import { useState, useEffect } from 'react'
import { resibeeAuth, resibeeFirestore } from '../config/firebase/config'
import { useAuthContext } from './useAuthContext'
import useFirebaseErrorMessage from './useFirebaseErrorMessage'

const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const { loginErrorMessage, error, setError } = useFirebaseErrorMessage()

  const login = async (email, password) => {

    try {
      setIsPending(true)
      const res = await resibeeAuth.signInWithEmailAndPassword(email, password)
      await resibeeFirestore.collection('users').doc(res.user.uid).update({ online: true })

      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
    catch (err) {
      if (!isCancelled) {
        loginErrorMessage(err.code)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPending, error }
}
export default useLogin
