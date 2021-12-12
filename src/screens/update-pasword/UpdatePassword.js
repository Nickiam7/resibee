import React, { useState } from 'react'
import {
  Alert,
  Button,
  View,
  TextInput,
  StyleSheet
} from 'react-native'

import { useUpdatePassword } from '../../hooks/useUpdatePassword'

const UpdatePassword = ({ navigation }) => {
  const {
    updatePassword,
    error,
    success,
    isPending,
  } = useUpdatePassword()

  const [form, setForm] = useState({
    newPassword: ''
  })

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const handleSubmit = () => {
    const { newPassword } = form
    updatePassword(newPassword)
  }

  let handleSuccessAlert = success && isPending ? (
    Alert.alert(
      'Success',
      'Your password has been updated successfully!',
      [
        {
          text: 'Okay',
          onPress: () => navigation.navigate('Profile')
        }
      ]
    )
  ) : null

  return (
    <View style={styles.container}>
      <TextInput
        value={form.newPassword}
        autoCapitalize='none'
        onChangeText={(value) => setFormInput('newPassword', value)}
        clearButtonMode='while-editing'
        placeholder='Password'
        secureTextEntry
        style={{ marginTop: 20, width: 150 }}
      />
      {!isPending &&
        <Button
          title="Reset Password"
          onPress={handleSubmit}
        />
      }
      {isPending &&
        <Button
          title="Loading..."
        />
      }
      {error && isPending && Alert.alert('Sorry,', error)}
      {handleSuccessAlert}
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

export default UpdatePassword
