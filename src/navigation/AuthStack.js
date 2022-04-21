import { createStackNavigator } from '@react-navigation/stack'

import { LogIn, Profile, SignUp } from '@screens'

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
        </>
      ) : (
        <>
          <Stack.Screen
            name='LogIn'
            component={LogIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default AuthStackNavigation
