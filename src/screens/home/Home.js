import { View } from "react-native"
import { AcmeText } from '@components'

import global from '../../globals/styles'

const Home = () => {
  return (
    <View style={global.elements.container}>
      <AcmeText
        style={{ fontSize: 50 }}
      >
        Resibee
      </AcmeText>
    </View>
  )
}

export default Home
