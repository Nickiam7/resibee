import { View } from "react-native"
import { AcmeText } from '@components'

import global from "../../globals/styles"

const AddRecipe = () => {
  return (
    <View style={global.elements.container}>
      <AcmeText
        style={{ fontSize: 50 }}
      >
        Add a new recipee
      </AcmeText>
    </View>
  )
}

export default AddRecipe
