import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Acme_400Regular
} from '@expo-google-fonts/acme'

import { useAuthContext } from '../../hooks/useAuthContext'

const AppRoot = ({ children }) => {
  const [fontLoaded] = useFonts({ Acme_400Regular })
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
