import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import global from '../../globals/styles'
import AcmeText from '../acme-text/AcmeText'

const Button = ({
  children, buttonStyle, textStyle, ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.button,
        buttonStyle
      ]}
      {...props}
    >
      <AcmeText
        style={[
          styles.buttonText,
          textStyle
        ]}
      >
        {children}
      </AcmeText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: global.colors.blue,
    marginTop: global.spacing.lg,
    paddingVertical: global.spacing.sm,
    borderRadius: global.elements.borderRadius,
  },
  buttonText: {
    fontSize: global.font.lg,
    textAlign: 'center',
    color: '#ffffff',
  }
})

export default Button
