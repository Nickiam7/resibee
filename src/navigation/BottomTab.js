import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { AddRecipe, Search, SignUp } from '@screens'
import RecipeStackNavigation from './RecipeStack'

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
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
            } else if (route.name === 'SignUp') {
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
          component={AddRecipe}
        />
        <BottomTab.Screen
          name="Search"
          component={Search}
        />
        <BottomTab.Screen
          name="SignUp"
          component={SignUp}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigation
