import { useReducer, useEffect, useState } from 'react'
import {
  resibeeFirestore,
  resibeeStorage,
  timestamp
} from '../config/firebase/config'

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null }
    case "UPDATED_DOCUMENT":
      return { isPending: false, document: action.payload, success: true, error: null }
    case "ADDED_COLLECTION":
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload }
    default:
      return state
  }
}

const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  const ref = resibeeFirestore.collection(collection)

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      const createdAt = timestamp.fromDate(new Date())

      const addedDocument = await ref.doc(doc.uid).collection('recipes').add({ ...doc, createdAt })

      if (doc.collection !== '' && doc.collection !== null) {
        await ref.doc(doc.uid).collection('collection').doc(doc.collection).set({ name: doc.collection })
        await ref.doc(doc.uid).collection('collection').doc(doc.collection).collection('recipes').doc(addedDocument.id).set({ ...doc, createdAt })
      }

      const uploadPath = `recipes/${doc.uid}/${addedDocument.id}/${doc.title}`
      const blobs = doc.recipePhotos.map(async (photo, index) => {
        const response = await fetch(photo)
        const blob = await response.blob()

        const img = await resibeeStorage.ref().child(`${uploadPath}-${index}`).put(blob)
        return await img.ref.getDownloadURL()
      })
      const allBlobs = await Promise.all(blobs)

      // await ref.doc(doc.uid).collection('recipes').doc(addedDocument.id).update({ ...doc, recipePhotos: allBlobs })

      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
      // dispatchIfNotCancelled({ type: 'ADDED_COLLECTION', payload: newCollection })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
      console.log(err.message)
    }
  }

  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      await ref.doc(id).delete()
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
    }
  }

  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" })

    try {
      const updatedDocument = await ref.doc(id).update(updates)
      dispatchIfNotCancelled({ type: "UPDATED_DOCUMENT", payload: updatedDocument })
      return updatedDocument
    }
    catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
      return null
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, updateDocument, response }

}

export default useFirestore
