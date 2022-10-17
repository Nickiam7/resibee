import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native'

import { global } from '@globals'

const Card = ({ children, style, ...props }) => {

  const width = Dimensions.get('window').width

  return (
    <View
      style={
        [
          styles.card,
          style,
          global.shadowProp,
        ]}
      {...props}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: global.elements.borderRadius,
    marginVertical: global.spacing.md
  }
})

export default Card
