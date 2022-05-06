import { useEffect, useState } from 'react'
import { resibeeAuth } from '../config/firebase/config'

const useForgotPassword = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const forgotPassword = async (email) => {
    setError(null)
    setIsPending(true)
    try {
      await resibeeAuth.sendPasswordResetEmail(email)
      setIsPending(false)
      setError(null)

    } catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { forgotPassword, error, isPending }
}

export default useForgotPassword
