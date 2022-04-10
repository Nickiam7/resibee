import { StyleSheet, View } from "react-native"
import { AcmeText } from '@components'

const Home = () => {
  return (
    <View style={styles.container}>
      <AcmeText
        style={{ fontSize: 50 }}
      >
        Resibee
      </AcmeText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
