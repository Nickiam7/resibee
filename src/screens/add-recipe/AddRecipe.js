import { StyleSheet, View } from "react-native"
import { AcmeText } from '@components'

const AddRecipe = () => {
  return (
    <View style={styles.container}>
      <AcmeText
        style={{ fontSize: 50 }}
      >
        Add a new recipee
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

export default AddRecipe
