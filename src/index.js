import { StatusBar } from 'expo-status-bar';

import { BottomTabNavigation } from '@navigation'
import { AppRoot } from '@components'

const App = () => {
  return (
    <AppRoot>
      <StatusBar style="auto" />
      <BottomTabNavigation />
    </AppRoot>
  )
}

export default App
