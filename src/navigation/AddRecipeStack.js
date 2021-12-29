import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AddRecipe, CameraScreen } from '@screens'

const Stack = createStackNavigator()

const AddRecipeStackNavigation = () => {
  return (
    <Stack.Navigator
      mode="modal"
    >
      <Stack.Screen
        name='AddRecipe'
        component={AddRecipe}
        options={{
          title: 'Add Recipe',
        }}
      />
      <Stack.Screen
        name='Camera'
        component={CameraScreen}
      />
    </Stack.Navigator>
  )
}

export default AddRecipeStackNavigation
