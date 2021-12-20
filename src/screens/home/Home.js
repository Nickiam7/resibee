import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import { useLogout } from '../../hooks/useLogout'

import { RecipeList } from '@components'

const Home = ({ navigation }) => {
  const { logout, isPending } = useLogout()
  const { user, authIsReady } = useAuthContext()
  const { documents, error } = useCollection(
    'recipes',
    ['favorite', '==', true],
    ['uid', '==', user.uid],
  )

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'ABeeZee_400Regular' }}>Resibee App</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleRecipe')}
      >
        <Text>Oh Hye there I'm an entry!</Text>
      </TouchableOpacity>
      {<RecipeList recipes={documents} />}

      <TouchableOpacity
        onPress={logout}
      >
        {!isPending && user && <Text>Logout</Text>}
        {isPending && user && <Text>Logout.....</Text>}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home
