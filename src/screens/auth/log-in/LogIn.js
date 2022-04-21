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

import { useLogin } from '@hooks'

import {
  GradientBackground,
  Input,
  Logo
} from '@components'

const LogIn = ({ navigation }) => {
  const { login, isPending, error } = useLogin()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const passwordRef = useRef(null)

  const handleSubmit = () => {
    const { email, password } = form
    login(email, password)
  }

  return (
    <GradientBackground>
      <View>
        <Logo
          size={50}
        />
      </View>
      <View>
        {isPending ? <ActivityIndicator /> : null}
        <Input
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
        />
        <Input
          ref={passwordRef}
          value={form.password}
          onChangeText={(value) => setFormInput('password', value)}
          clearButtonMode='while-editing'
          placeholder='Password'
          secureTextEntry
          returnKeyType='done'
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
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('ResetPassword')}
          >
            Reset Password
          </Text>
        </TouchableOpacity>
        {error && isPending && Alert.alert('Sorry,', error)}
      </View>
    </GradientBackground>
  )
}

export default LogIn
