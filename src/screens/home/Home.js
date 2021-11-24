import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello From HOME!!!!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleRecipe')}
      >
        <Text>Aunt Beena's Stuffing</Text>
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
