import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import {
  useFonts,
  ABeeZee_400Regular
} from '@expo-google-fonts/abeezee';

const Home = ({ navigation }) => {
  const [fontLoaded] = useFonts({ ABeeZee_400Regular })

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'ABeeZee_400Regular' }}>Hello From HOME!!!!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleRecipe')}
      >
        <Text>Aunt Beena's Stuffing</Text>
      </TouchableOpacity>
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
});

export default Home
