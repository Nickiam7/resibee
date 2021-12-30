import React from 'react'
import { Image, View } from 'react-native'

import styles from './recipe-photo-thumbs-styles'

const RecipePhotoThumbs = ({ photos }) => {
  return (
    <View style={styles.container}>
      {photos && photos.map(photo => (
        <Image
          key={photo}
          style={styles.image}
          source={{ uri: photo }}
        />
      ))}
    </View>
  )
}

export default RecipePhotoThumbs
