import React, { useState } from 'react'
import {
  Alert,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { useResetPassword } from '../../hooks/useResetPassword'

const ResetPassword = ({ navigation }) => {
  const { resetPassword, error, isPending } = useResetPassword()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const handleSubmit = () => {
    const { email } = form
    resetPassword(email)
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={form.email}
        autoCapitalize='none'
        onChangeText={(value) => setFormInput('email', value)}
        keyboardType='email-address'
        placeholder='Email'
        returnKeyType='next'
        clearButtonMode='while-editing'
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
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign up
        </Text>
      </TouchableOpacity>
      {error && isPending && Alert.alert('Sorry,', error)}
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

export default ResetPassword
