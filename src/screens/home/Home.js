import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Text,
  View
} from "react-native"

import {
  AcmeText,
  Card,
} from '@components'

import { global } from '@globals'

import { useAuthContext } from '../../hooks/useAuthContext'
import { resibeeFirestore } from '../../config/firebase/config'

const Home = () => {
  const { user } = useAuthContext()

  const [collections, setCollections] = useState()

  useEffect(() => {
    resibeeFirestore.collection('users')
      .doc(user.uid)
      .collection('collection')
      .onSnapshot(snapshot => {
        let results = []
        snapshot.forEach(i => results.push(i.data()))
        setCollections(results)
      })
  }, [])

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
        <Card>
          <AcmeText
            style={{ fontSize: global.font.md }}
          >
            Favorites
          </AcmeText>
          <View style={{ flexDirection: 'row' }}>
            {[1, 2, 4].map((i, item) => <Text key={i}>Item =&gt; {item} </Text>)}
          </View>
        </Card>
        <Card>
          {collections ? (
            collections.map(collection => (
              <Text
                key={collection.name}
              >
                {collection.name}
              </Text>
            ))
          ) : (
            <ActivityIndicator size="large" />
          )}
        </Card>
      </View>
    </View>
  )
}

export default Home
