import { StyleSheet, View } from 'react-native'

import { global } from '@globals'

const StripedGradientBackground = () => {
  return (
    <View style={styles.stripeContainer}>
      <View style={
        [styles.stripe, { backgroundColor: 'rgba(0,0,0, 0.02)' }]
      }></View>
      <View style={
        [styles.stripe, { backgroundColor: 'rgba(0,0,0, 0.03)' }]
      }></View>
      <View style={
        [styles.stripe, { backgroundColor: 'rgba(0,0,0, 0.04)' }]
      }></View>
      <View style={
        [styles.stripe, { backgroundColor: 'rgba(0,0,0, 0.05)' }]
      }></View>
      <View style={
        [styles.stripe, { backgroundColor: 'rgba(0,0,0, 0.06)' }]
      }></View>
    </View>
  )
}

const styles = StyleSheet.create({
  stripeContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    transform: [{ skewY: "15deg" }]
  },
  stripe: {
    width: '100%',
    height: 55,
    marginVertical: global.spacing.lg,
  }
})

export default StripedGradientBackground
