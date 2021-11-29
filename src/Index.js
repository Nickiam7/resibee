import React from 'react'

import { AppRoot } from '@components'
import { BottomTabNavigation } from '@navigation'

import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <AppRoot>
      <AuthContextProvider>
        <BottomTabNavigation />
      </AuthContextProvider>
    </AppRoot>
  );
}

export default App
