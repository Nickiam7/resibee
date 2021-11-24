import React from 'react'

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
          title: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: '#ffffff',
        }}
      />
      <Stack.Screen
        name="SingleRecipe"
        component={SingleRecipe}
        options={{
          headerStyle: {
            backgroundColor: '#ffffff'
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default RecipeStackNavigation
