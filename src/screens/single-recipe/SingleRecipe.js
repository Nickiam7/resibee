import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SingleRecipe = () => {
  return (
    <View style={styles.container}>
      <Text>Hello From SINGLE Recipe!!!!</Text>
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

export default SingleRecipe
