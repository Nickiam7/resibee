import React from 'react'

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ABeeZee_400Regular
} from '@expo-google-fonts/abeezee';

const AppRoot = ({ children }) => {
  const [fontLoaded] = useFonts({ ABeeZee_400Regular })

  return fontLoaded ? (
    <>
      {children}
    </>
  ) : (
    <AppLoading />
  )
}

export default AppRoot
