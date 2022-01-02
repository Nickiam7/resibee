import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  View,
  Image,
  StyleSheet
} from 'react-native'

const RecipeImage = ({ route }) => {
  const [recPhoto, setRecPhoto] = useState(null)

  useEffect(() => {
    if (route.params?.photo) {
      setRecPhoto(route.params?.photo)
    }
  }, [route.params?.photo])

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: recPhoto }}
        style={styles.image}
      />
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
  image: {
    width: '100%',
    height: '100%',
  },
})

export default RecipeImage
