import { createStackNavigator } from '@react-navigation/stack'

import { ForgotPassword, LogIn, Profile, SignUp } from '@screens'

import { useAuthContext } from '../hooks/useAuthContext'

import { global } from '@globals'

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
        </>
      ) : (
        <>
          <Stack.Screen
            name='LogIn'
            component={LogIn}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: false,
              headerTintColor: global.colors.blue,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: false,
              headerTintColor: global.colors.blue,
              headerBackTitleVisible: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default AuthStackNavigation
