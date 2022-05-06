import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { global } from '@globals'

const AuthLinks = ({ navigation, children, linkTo }) => {
  return (
    <View style={{ alignItems: 'center', paddingVertical: global.spacing.lg }}>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate(linkTo)}
          style={{ fontSize: global.font.md }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthLinks
