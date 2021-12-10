import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home, Login, SignUp } from '@screens'

import { useAuthContext } from '../hooks/useAuthContext'

const Stack = createStackNavigator()

const AuthStackNavigation = () => {
  const { user } = useAuthContext()
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="Home"
          component={Home}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login"
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerStyle: {
                backgroundColor: '#ffffff'
              },
              headerBackTitleVisible: false
            }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default AuthStackNavigation
