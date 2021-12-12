import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Login, Profile, ResetPassword, SignUp, UpdatePassword } from '@screens'

import { useAuthContext } from '../hooks/useAuthContext'

const Stack = createStackNavigator()

const AuthStackNavigation = () => {
  const { user } = useAuthContext()
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name='Profile'
            component={Profile}
            options={{
              title: user.displayName
            }}
          />
          <Stack.Screen
            name='UpdatePassword'
            component={UpdatePassword}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              title: 'Login'
            }}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
              headerStyle: {
                backgroundColor: '#ffffff'
              },
              headerBackTitleVisible: false
            }}
          />
          <Stack.Screen
            name='ResetPassword'
            component={ResetPassword}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default AuthStackNavigation
