import React from 'react'

import { AppRoot } from '@components'
import { AppNavigation } from '@navigation'

import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <AppRoot>
      <AuthContextProvider>
        <AppNavigation />
      </AuthContextProvider>
    </AppRoot>
  );
}

export default App
