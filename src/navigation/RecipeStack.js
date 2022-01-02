import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import {
  Home,
  RecipeImage,
  SingleRecipe
} from '@screens'

const Stack = createStackNavigator()

const RecipeStackNavigation = () => {
  return (
    <Stack.Navigator
      headerMode='float'
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Resibee',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: '#ffffff'
        }}
      />
      <Stack.Screen
        name='SingleRecipe'
        component={SingleRecipe}
        options={({ route }) => ({
          title: route.params.title,
          headerTransparent: true,
          headerBackTitleVisible: false
        })}
      />
      <Stack.Screen
        name='RecipeImage'
        component={RecipeImage}
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false
        }}
      />
    </Stack.Navigator>
  )
}

export default RecipeStackNavigation
