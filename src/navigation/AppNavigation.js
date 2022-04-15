import BottomTabNavigation from './BottomTab'
import AuthStackNavigation from './AuthStack'

import { NavigationContainer } from '@react-navigation/native'

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
