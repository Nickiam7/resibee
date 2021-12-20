import { useEffect, useState, useRef } from 'react'
import { resibeeFirestore } from '../config/firebase/config'

export const useCollection = (collection, _query, _favorites, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current
  const favorites = useRef(_favorites).current

  useEffect(() => {
    let ref = resibeeFirestore.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }
    if (favorites) {
      ref = ref.where(...favorites)
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      });

      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })

    return () => unsubscribe()

  }, [collection, query, orderBy])

  return { documents, error }
}
