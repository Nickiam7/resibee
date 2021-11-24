import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import { AddRecipe, Search } from '@screens'

import { RecipeStackNavigation } from '@navigation'

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Add Recipe') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
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
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigation
