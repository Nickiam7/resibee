import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'

const Profile = () => {
  const { user, authIsReady } = useAuthContext()
  const { logout, isPending } = useLogout()

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={logout}
      >
        {!isPending && user && <Text>Logout</Text>}
        {isPending && user && <Text>Logout.....</Text>}
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
})

export default Profile
