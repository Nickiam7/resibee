import { useState } from 'react'
import { resibeeAuth } from '../config/firebase/config'

export const useResetPassword = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const resetPassword = async (email) => {
    setError(null)
    setIsPending(true)
    try {
      await resibeeAuth.sendPasswordResetEmail(email)
      setIsPending(false)
      setError(null)

    } catch (err) {
      setError(err.message)
      setIsPending(false)
    }
  }

  return { resetPassword, error, isPending }
}


