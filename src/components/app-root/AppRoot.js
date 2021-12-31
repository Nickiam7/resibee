import React from 'react'

import AppLoading from 'expo-app-loading'
import {
  useFonts,
  ABeeZee_400Regular
} from '@expo-google-fonts/abeezee'

import { useAuthContext } from '../../hooks/useAuthContext'

const AppRoot = ({ children }) => {
  const [fontLoaded] = useFonts({ ABeeZee_400Regular })
  const { authIsReady } = useAuthContext()

  return fontLoaded && authIsReady ? (
    <>
      {children}
    </>
  ) : (
    <AppLoading />
  )
}

export default AppRoot
