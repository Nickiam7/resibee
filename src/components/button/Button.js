import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import AcmeText from '../acme-text/AcmeText'

const Button = ({
  children, buttonStyle, ...props
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
        style={styles.buttonText}
      >
        {children}
      </AcmeText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#252b45',
    marginTop: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25,
  }
})

export default Button
