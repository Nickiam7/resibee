import { Text, View } from "react-native"
import { AcmeText } from '@components'

import { global } from '@globals'

const Home = () => {
  return (
    <View style={
      [
        global.elements.containerStart,
        global.elements.safeZone,
        { paddingLeft: 25 }
      ]
    }>
      <View style={global.elements.containerFlexStart}>
        <AcmeText
          style={{ fontSize: 50 }}
        >
          Resibee
        </AcmeText>
      </View>
      <View
        style={global.elements.containerFlexStart}
      >
        <AcmeText
          style={{ fontSize: global.font.md }}
        >
          Favorites
        </AcmeText>
        <View>
          {[1, 2, 4].map((i, item) => <Text key={i}>Item =&gt; {item}</Text>)}
        </View>
      </View>
    </View>
  )
}

export default Home
