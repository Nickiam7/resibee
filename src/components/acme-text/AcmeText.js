import { Text } from 'react-native'

const AcmeText = ({ children, style, ...props }) => {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'Acme_400Regular' }, style]}
    >
      {children}
    </Text>
  )
}

export default AcmeText
