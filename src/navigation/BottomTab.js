import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Home, AddRecipe, Profile } from '@screens'

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
          } else if (route.name === 'Profile') {
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
        component={Home}
      />
      <BottomTab.Screen
        name="Add Recipe"
        component={AddRecipe}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigation
