import { StatusBar } from 'expo-status-bar';

import { AppRoot } from '@components'

import { Home } from '@screens'


const App = () => {
  return (
    <AppRoot>
      <StatusBar style="auto" />
      <Home />
    </AppRoot>
  )
}

export default App
