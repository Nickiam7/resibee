import React from 'react'
import { Text, View } from 'react-native'

import { BottomTabNavigation, AuthStackNavigation } from '@navigation'
import { NavigationContainer } from "@react-navigation/native";

import { Login } from '@screens'

import { useAuthContext } from '../hooks/useAuthContext'

const AppNavigation = () => {
  const { user, authIsReady } = useAuthContext()

  return (
    <NavigationContainer>
      {user ? (
        <BottomTabNavigation />
      ) : (
        <AuthStackNavigation />
      )}
    </NavigationContainer>
  )
}

export default AppNavigation
