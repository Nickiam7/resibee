import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { AddRecipe, Search, SignUp } from '@screens'
import RecipeStackNavigation from './RecipeStack'
import AddRecipeStackNavigation from './AddRecipeStack'
import AuthStackNavigation from './AuthStack'

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = 'beehive-outline'
          } else if (route.name === 'Add Recipe') {
            iconName = 'camera-plus-outline'
          } else if (route.name === 'Search') {
            iconName = 'magnify'
          } else if (route.name === 'Auth') {
            iconName = 'account'
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={RecipeStackNavigation}
      />
      <BottomTab.Screen
        name="Add Recipe"
        component={AddRecipeStackNavigation}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
      />
      <BottomTab.Screen
        name="Auth"
        component={AuthStackNavigation}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigation
