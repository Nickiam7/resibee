import { useEffect } from 'react'

import {
  ActivityIndicator,
  FlatList,
  LogBox,
  Text,
  Pressable,
  View,
} from 'react-native'

import { global } from '@globals'

const CollectionScroll = ({ collections, setFormInput, setToggleTheGetCollection }) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])


  const handleCollectionSelect = (item) => {
    setFormInput('collection', item.item)
    setToggleTheGetCollection(false)
  }

  return (
    collections ? (
      <FlatList
        nestedScrollEnabled={true}
        data={collections}
        style={{ width: '100%' }}
        renderItem={itemData => {
          return (
            <View
              style={global.elements.listItem}
            >
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(0, 0, 0, 0.05)'
                      : 'white'
                  }
                ]}
                onPress={() => handleCollectionSelect(itemData)}
              >
                <Text style={{ paddingVertical: 12 }}>
                  {itemData.item}
                </Text>
              </Pressable>
            </View>
          )
        }}
        keyExtractor={(item, index) => {
          return item
        }}
      />
    ) : (
      <ActivityIndicator size="large" />
    )
  )
}

export default CollectionScroll
