import { View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

import StripedGradientBackground from './StripedGradientBackground'

const GradientBackground = ({ children, striped }) => {
  return (
    <>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StatusBar style="dark" />
        <LinearGradient
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}
          colors={['#f7b224', '#f6981d', '#f7b224']}
          locations={[0.2, 0.6, 0.2]}
        />
        {striped && <StripedGradientBackground />}
        {children}
      </View>
    </>
  )
}

export default GradientBackground
