import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import styles from './recipe-photo-thumbs-styles'
import { useNavigation } from '@react-navigation/native'

const RecipePhotoThumbs = ({ photos }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {photos && photos.map(photo => (
        <TouchableOpacity
          onPress={() => navigation.navigate('RecipeImage',
            { photo }
          )}
          key={photo}
        >
          <Image
            style={styles.image}
            source={{ uri: photo }}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RecipePhotoThumbs
