import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { Camera } from 'expo-camera'

import { RecipePhotoThumbs } from '@components'

const CameraScreen = ({ navigation, route }) => {
  const cameraRef = useRef()
  const [hasPermission, setHasPermission] = useState(null)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()
      setPhotos([...photos, photo.uri])
    }
  }

  return (
    <>
      <Camera
        style={styles.camera}
        ref={(cam) => (cameraRef.current = cam)}
      >

      </Camera>
      <View>
        <View style={styles.labels}>
          <Text>Images</Text>
          <Text
            onPress={() => {
              navigation.navigate({
                name: 'AddRecipe',
                params: { photos },
                merge: true
              })
            }}
          >
            Done
          </Text>
        </View>

        <RecipePhotoThumbs photos={photos} />
      </View>
      <View>
        <TouchableOpacity
          onPress={takePhoto}
          style={styles.cameraButton}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  camera: {
    width: '100%',
    height: '75%'
  },
  cameraButton: {
    backgroundColor: 'red',
    borderRadius: 150,
    width: 75,
    height: 75,
    alignSelf: 'center'
  },
  labels: {
    flexDirection: 'row',
    height: 25,
    width: '100%',
    justifyContent: 'space-between',
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
});
export default CameraScreen
