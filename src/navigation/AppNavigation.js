import React from 'react'
import { Text, View } from 'react-native'

import { BottomTabNavigation, AuthStackNavigation } from '@navigation'
import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from '../hooks/useAuthContext'

const AppNavigation = () => {
  const { user } = useAuthContext()

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
