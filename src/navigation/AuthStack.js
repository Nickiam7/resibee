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
              title: 'Log in'
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
        </>
      )}
    </Stack.Navigator>
  )
}

export default AuthStackNavigation
