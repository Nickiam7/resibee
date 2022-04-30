import React, { useState, useRef } from 'react'
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native'

import { useLogin } from '@hooks'

import {
  Button,
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
    <GradientBackground striped={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <View>
            <Logo
              size={65}
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
              blurOnSubmit={false}
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
                onPress={handleSubmit}
              >
                Login
              </Button>
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
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </GradientBackground>
  )
}

export default LogIn
