import React from 'react'

import { AppNavigation } from '@navigation'

import { AuthContextProvider } from './context/AuthContext'

import { AppRoot } from '@components'

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
