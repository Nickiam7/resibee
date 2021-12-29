import React, { useState, useEffect } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'

const AddRecipe = ({ navigation, route }) => {
  const { user } = useAuthContext()
  const { addDocument, response } = useFirestore('recipes')

  const [favorite, setFavorite] = useState(false)
  const [favText, setFavText] = useState('Favorite')
  const [recipeImage, setRecipeImage] = useState(null)

  useEffect(() => {
    if (route.params?.image) {
      setRecipeImage(route.params?.image)
    }
  }, [route.params?.image])

  const [form, setForm] = useState({
    title: '',
  })

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const handleSubmit = () => {
    const { title } = form
    addDocument({
      uid: user.uid,
      title,
      favorite,
      recipeImage,
    })
  }

  const handleFavorite = () => {
    if (favorite === false) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
    setFavText(favorite ? 'Un-favorite' : 'Favorite')
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={form.title}
        autoCapitalize='words'
        onChangeText={(value) => setFormInput('title', value)}
        placeholder='Title'
        returnKeyType='done'
        clearButtonMode='while-editing'
        style={{ marginTop: 20, width: 150 }}
      />
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('Camera')}
        >
          Add image
        </Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{ uri: recipeImage }}
      />
      <TouchableOpacity style={{ marginVertical: 50 }}>
        <Text
          onPress={handleFavorite}
        >
          {favText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          onPress={handleSubmit}
        >
          Add new recipe
        </Text>
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
  image: {
    width: 50,
    height: 50,
  },
});

export default AddRecipe
