import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'ABeeZee_400Regular' }}>Resibee App</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleRecipe')}
      >
        <Text>Oh Hye there I'm an entry!</Text>
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
