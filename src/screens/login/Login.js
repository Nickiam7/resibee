import React, { useState, useRef } from 'react'
import {
  ActivityIndicator,
  Alert,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { useLogin } from '../../hooks/useLogin'

const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const { login, isPending, error } = useLogin()

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = () => {
    const { email, password } = form
    login(email, password)
  }

  return (
    <View style={styles.container}>
      {isPending ? <ActivityIndicator /> : null}
      <TextInput
        ref={emailRef}
        value={form.email}
        autoCapitalize='none'
        onChangeText={(value) => setFormInput('email', value)}
        keyboardType='email-address'
        placeholder='Email'
        returnKeyType='next'
        clearButtonMode='while-editing'
        onSubmitEditing={() => {
          passwordRef.current?.focus()
        }}
        style={{ marginTop: 20, width: 150 }}
      />
      <TextInput
        ref={passwordRef}
        value={form.password}
        onChangeText={(value) => setFormInput('password', value)}
        clearButtonMode='while-editing'
        placeholder='Password'
        secureTextEntry
        returnKeyType='done'
        style={{ marginTop: 20, width: 150 }}
      />
      {!isPending &&
        <Button
          title="Login"
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

export default Login
