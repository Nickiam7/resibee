import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SingleRecipe = ({ route }) => {
  const { recipeId, title } = route.params
  return (
    <View style={styles.container}>
      <Text>Hello From --{'>'} {title}</Text>
      <Text>ID: {recipeId}</Text>
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
