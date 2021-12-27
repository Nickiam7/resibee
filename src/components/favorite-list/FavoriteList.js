import React from 'react'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { useCollection } from '../../hooks/useCollection'
import { useFirestore } from '../../hooks/useFirestore'
import { useNavigation } from '@react-navigation/native'

const FavoriteList = ({ user }) => {

  const navigation = useNavigation()
  const { documents, error } = useCollection(
    'recipes',
    ['uid', '==', user.uid],
    ['favorite', '==', true],
  )
  const { deleteDocument } = useFirestore('recipes')

  let favoriteList = documents ? (
    documents && documents.map(recipe => (
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
    <Text>No Favorite Recipes</Text>
  )

  return (
    <>
      {favoriteList}
    </>
  )
}

export default FavoriteList
