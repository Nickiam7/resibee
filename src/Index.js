import React from 'react'

import { AppNavigation } from '@navigation'

import { AuthContextProvider } from './context/AuthContext'

import { AppRoot } from '@components'

const App = () => {
  return (
    <AuthContextProvider>
      <AppRoot>
        <AppNavigation />
      </AppRoot>
    </AuthContextProvider>
  );
}

export default App
