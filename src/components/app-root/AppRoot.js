import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Acme_400Regular
} from '@expo-google-fonts/acme'

const AppRoot = ({ children }) => {
  const [fontLoaded] = useFonts({ Acme_400Regular })

  return fontLoaded ? (
    <>
      {children}
    </>
  ) : (
    <AppLoading />
  )
}

export default AppRoot
