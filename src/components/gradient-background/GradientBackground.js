import React from 'react'
import { View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'


const GradientBackground = ({ children }) => {
  return (
    <View style={{
      flex: 1, alignItems: 'center',
      justifyContent: 'center',
    }}>
      <StatusBar style="light" />
      <LinearGradient
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }}
        colors={['blue', 'green', 'red']}
        locations={[0.2, 0.6, 0.6]}
      />
      {children}
    </View>
  )
}

export default GradientBackground
