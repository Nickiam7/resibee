import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'

const Profile = ({ navigation }) => {
  const { user } = useAuthContext()
  const { logout, isPending } = useLogout()

  return (
    <View style={styles.container}>
      <Text>{user.displayName}</Text>
      <Text>{user.email}</Text>
      <TouchableOpacity
        onPress={logout}
      >
        {!isPending && user && <Text>Logout</Text>}
        {isPending && user && <Text>Logout.....</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('UpdatePassword')}
      >
        <Text>Update Password</Text>
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

export default Profile
