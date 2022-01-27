import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import { useLogout } from '../../hooks/useLogout'

import {
  RecipeList,
  GradientBackground
} from '@components'

const Home = () => {
  const { logout, isPending } = useLogout()
  const { user, authIsReady } = useAuthContext()
  const { documents, error } = useCollection(
    'recipes',
    ['uid', '==', user.uid],
  )

  return (
    <GradientBackground style={styles.container}>
      <Text
        style={{ fontFamily: 'ABeeZee_400Regular' }}
      >
        Resibee App
      </Text>
      <View>
        {<RecipeList recipes={documents} />}
      </View>
      <TouchableOpacity
        onPress={logout}
      >
        {!isPending && user && <Text>Logout</Text>}
        {isPending && user && <Text>Logout.....</Text>}
      </TouchableOpacity>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});

export default Home
