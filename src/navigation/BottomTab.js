import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { NavigationContainer } from "@react-navigation/native"

import { Home, AddRecipe } from '@screens'

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
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigation
