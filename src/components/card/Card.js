import { StyleSheet, View } from 'react-native'

import { global } from '@globals'

const Card = ({ children, style, ...props }) => {
  return (
    <View
      style={[
        styles.card,
        style
      ]}
      {...props}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingBottom: global.spacing.md,
    marginVertical: global.spacing.md,
  }
})

export default Card
