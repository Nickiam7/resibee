import { Text } from 'react-native'
import { global } from '@globals'

const AcmeText = ({ children, style, ...props }) => {
  return (
    <Text
      {...props}
      style={[{ fontFamily: global.font.acme }, style]}
    >
      {children}
    </Text>
  )
}

export default AcmeText
