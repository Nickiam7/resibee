import React from 'react'
import { Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import { Home, SingleRecipe } from '@screens'

const Stack = createStackNavigator()

const RecipeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Resibee"
        }}
      />
      <Stack.Screen
        name="SingleRecipe"
        component={SingleRecipe}
        options={{
          headerStyle: {
            backgroundColor: '#ffffff'
          },
          headerBackTitleVisible: false
        }}
      />
    </Stack.Navigator>
  )
}

export default RecipeStackNavigation
