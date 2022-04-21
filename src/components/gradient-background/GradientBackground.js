import { View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'


const GradientBackground = ({ children }) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
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
        colors={['#f6981d', '#f7b224', '#f6981d']}
        locations={[0.2, 0.6, 0.2]}
      />
      {children}
    </View>
  )
}

export default GradientBackground
