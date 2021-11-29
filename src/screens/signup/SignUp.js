import React, { useState, useRef } from 'react'
import {
  Alert,
  Button,
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native'

import { useSignup } from '../../hooks/useSignup'

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    displayName: '',
    password: ''
  })
  const { signup, isPending, error } = useSignup()

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const emailRef = useRef(null)
  const displayNameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = () => {
    const { email, password, displayName } = form
    signup(email, password, displayName)
  }

  return (
    <View style={styles.container}>
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
          displayNameRef.current?.focus()
        }}
        style={{ marginTop: 20, width: 150 }}
      />
      <TextInput
        ref={displayNameRef}
        value={form.displayName}
        autoCapitalize='none'
        onChangeText={(value) => setFormInput('displayName', value)}
        placeholder='Display Name'
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
          title="Sign up"
          onPress={handleSubmit}
        />
      }
      {isPending &&
        <Button
          title="Loading..."
        />
      }
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

export default SignUp
