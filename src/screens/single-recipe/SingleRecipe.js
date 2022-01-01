import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RecipePhotoThumbs } from '@components'

const SingleRecipe = ({ route }) => {
  const { recipeId, title, images } = route.params
  const [recImages, setRecImages] = useState(null)

  useEffect(() => {
    setRecImages(images)
  }, [])
  return (
    <View style={styles.container}>
      <Text>Hello From --{'>'} {title}</Text>
      <Text>ID: {recipeId}</Text>
      <Text>-------Images------</Text>
      <RecipePhotoThumbs
        photos={recImages}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
})

export default SingleRecipe
