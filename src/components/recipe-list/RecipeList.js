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
  const { deleteDocument } = useFirestore('recipes')

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
              title: recipe.title
            })}
          >
            <Text>{recipe.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { deleteDocument(recipe.id) }}
          >
            <Text>x</Text>
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
