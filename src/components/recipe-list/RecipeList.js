import React from 'react'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { useFirestore } from '../../hooks/useFirestore'
import { useNavigation } from '@react-navigation/native'

const RecipeList = ({ recipes }) => {

  const navigation = useNavigation()
  const { deleteDocument, updateDocument } = useFirestore('recipes')

  const handleFavorite = (recipe) => {
    updateDocument(recipe.id, { favorite: !recipe.favorite })
  }

  let recipesList = recipes ? (
    recipes && recipes.map(recipe => (
      <View key={recipe.id}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleRecipe', {
              recipeId: recipe.id,
              title: recipe.title,
              favorite: recipe.favorite,
              images: recipe.recipePhotos
            })}
          >
            <Text>{recipe.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { deleteDocument(recipe.id) }}
          >
            <Text>   (X)   </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { handleFavorite(recipe) }}
          >
            <Text>   (Fav)   </Text>
          </TouchableOpacity>
        </View>
      </View >
    ))
  ) : (
    <Text>No Recipes</Text>
  )

  return (
    <>
      {recipesList}
    </>
  )
}

export default RecipeList
