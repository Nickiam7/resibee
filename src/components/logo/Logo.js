import {
  Image,
  StyleSheet,
  View
} from 'react-native'

import global from '../../globals/styles'

import AcmeText from '../acme-text/AcmeText'


const Logo = ({ size, ...props }) => {
  return (
    <>
      <View>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('@assets/beelogo.png')}
        />
        <AcmeText
          {...props}
          style={{
            color: global.colors.primary,
            fontSize: size
          }}
        >
          Resibee
        </AcmeText>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    bottom: 75,
    left: 40,
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
})

export default Logo
