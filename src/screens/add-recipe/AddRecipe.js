import { useState } from 'react'

import {
  ScrollView,
  Text,
  View
} from "react-native"

import {
  AcmeText,
  Button,
  Card,
  CollectionScroll,
  Input,
} from '@components'

import { AntDesign } from '@expo/vector-icons'

import { global } from '@globals'

import { useAuthContext } from '../../hooks/useAuthContext'
import { resibeeFirestore } from '../../config/firebase/config'
import {
  useDocument,
  useFirestore
} from '@hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AddRecipe = () => {
  const { user } = useAuthContext()
  const { addDocument } = useFirestore('users')
  const { document, error } = useDocument('users', user.uid)

  const [form, setForm] = useState({
    name: '',
    collection: ''
  })

  const [toggleNewCollection, setToggleNewCollection] = useState(false)
  const [toggleGetCollection, setToggleGetCollection] = useState(false)
  const [collections, setCollections] = useState()

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const handleSubmit = () => {
    const { name, collection } = form
    addDocument({
      uid: user.uid,
      name,
      collection
    })
  }

  const showCollectionNew = () => {
    setToggleNewCollection(!toggleNewCollection)
    setToggleGetCollection(false)
    if (toggleNewCollection === true && form.collection?.length > 0) {
      setForm(form.collection = '')
    }
  }

  const showCollectionGet = async () => {
    setToggleNewCollection(false)
    setToggleGetCollection(!toggleGetCollection)

    if (toggleGetCollection === true && form.collection?.length > 0) {
      setForm(form.collection = '')
    }

    if (!toggleGetCollection) {
      resibeeFirestore.collection('users')
        .doc(user.uid)
        .collection('collection')
        .onSnapshot(snapshot => {
          let results = []
          snapshot.forEach(i => results.push(i.data().name))
          setCollections(results)
        })
    }
  }



  return (
    <View style={
      [
        global.elements.containerStart,
        global.elements.safeZone,
        { paddingLeft: global.spacing.lg, paddingRight: global.spacing.lg }
      ]
    }>
      <View style={global.elements.containerFlexStart}>
        <AcmeText
          style={{ fontSize: 50 }}
        >
          Add Recipe
        </AcmeText>
      </View>
      <ScrollView
        alwaysBounceVertical={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{ width: '100%', paddingTop: global.spacing.lg }}
      >
        <Card>
          <Text
            style={{
              paddingLeft: global.spacing.sm
            }}
          >
            Name
          </Text>
          <Input
            value={form.name}
            onChangeText={(value) => setFormInput('name', value)}
            placeholder='Add recipe name'
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              marginTop: global.spacing.xs,
            }}
          />
        </Card>
        <Card>
          <Text
            style={{
              paddingLeft: global.spacing.sm
            }}
          >
            Add or select collection
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
              buttonStyle={{
                width: '50%',
                justifyContent: 'center',
                marginTop: global.spacing.xs,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRightColor: '#40486b',
                borderWidth: 1,
              }}
              textStyle={{ fontSize: 16 }}
              onPress={showCollectionNew}
            >
              {toggleNewCollection ? 'Cancel' : 'Add' + '\n new collection'}
            </Button>
            <View
              style={{
                justifyContent: 'center',
                position: 'absolute',
                width: 32,
                height: 32,
                top: 25,
                right: '45%',
                zIndex: 1,
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 64,
              }}
            >
              <AcmeText style={{
                color: global.colors.primary,
                fontSize: global.font.md,
              }}
              >
                Or
              </AcmeText>
            </View>
            <Button
              buttonStyle={{
                width: '50%',
                justifyContent: 'center',
                marginTop: global.spacing.xs,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderLeftColor: '#40486b',
                borderWidth: 1,
              }}
              textStyle={{ fontSize: 16 }}
              onPress={showCollectionGet}
            >
              {toggleGetCollection ? 'Cancel' : 'Select' + '\n from collections'}
            </Button>
          </View>
          {toggleNewCollection &&
            <View
              style={[global.shadowProp, {
                padding: global.spacing.sm,
                backgroundColor: '#ffffff',
                borderRadius: global.elements.borderRadius,
                marginTop: 4
              }]}
            >
              <View style={[global.elements.diamond, { left: 75 }]}></View>
              <View style={{ flexDirection: 'row' }}>
                <Input
                  value={form.collection}
                  onChangeText={(value) => setFormInput('collection', value)}
                  placeholder='Add collection name'
                  clearButtonMode='while-editing'
                  style={{
                    width: '75%',
                    backgroundColor: '#ffffff',
                    marginTop: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                  }}
                />
                <Button
                  onPress={() => setToggleNewCollection(false)}
                  buttonStyle={{
                    width: '25%',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    marginTop: 0,
                    height: 50,
                    paddig: 0,
                    justifyContent: 'center',
                  }}
                  textStyle={{ fontSize: global.font.md }}
                >
                  Done
                </Button>
              </View>
            </View>
          }
          {toggleGetCollection &&
            <View
              style={[global.shadowProp, {
                padding: global.spacing.sm,
                backgroundColor: '#ffffff',
                borderRadius: global.elements.borderRadius,
                marginTop: 4,
                width: '75%',
                height: '75%',
                alignSelf: 'flex-end',
                justifyContent: 'center',
              }]}
            >
              <View style={[global.elements.diamond, { right: 75 }]}></View>
              <CollectionScroll
                collections={collections}
                setFormInput={setFormInput}
                setToggleTheGetCollection={setToggleGetCollection}
              />
            </View>
          }
          {form.collection?.length > 0 &&
            <View
              style={{
                paddingLeft: global.spacing.sm,
                paddingTop: global.spacing.sm,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text>Adding to collection:
                  <Text style={{ fontWeight: '700' }}> {form.collection}</Text>
                </Text>
                <TouchableOpacity
                  onPress={() => { setForm(form.collection = '') }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: global.elements.borderRadius,
                    borderColor: '#A92C05',
                    padding: 4,
                    marginLeft: 16
                  }}
                >
                  <Text>
                    <AntDesign
                      name="closecircle"
                      size={12}
                      color="#A92C05"
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        </Card>
      </ScrollView>
      <Card
        style={{
          width: '100%',
          paddingTop: global.spacing.sm,
          marginTop: 0,
          paddingBottom: global.spacing.sm,
          marginBottom: 0
        }}
      >
        <Button
          onPress={handleSubmit}
          buttonStyle={{ marginTop: 0 }}
        >
          Add new recipe
        </Button>
      </Card>
    </View>
  )
}

export default AddRecipe
