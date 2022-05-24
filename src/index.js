import { StatusBar } from 'expo-status-bar';

import { AuthContextProvider } from './context/AuthContext'
import { AppNavigation } from '@navigation'

import { AppRoot } from '@components'

const App = () => {
  return (
    <AuthContextProvider>
      <AppRoot>
        <StatusBar style="dark" />
        <AppNavigation />
      </AppRoot>
    </AuthContextProvider>
  )
}

export default App
