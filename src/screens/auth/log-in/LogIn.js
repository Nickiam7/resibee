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

import global from '../../../globals/styles'

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
              size={64}
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
            <View style={{ alignItems: 'flex-end', paddingVertical: global.spacing.md }}>
              <Text
                onPress={() => Alert.alert('Hello World')}
              >
                Forgot Password?
              </Text>
            </View>
            {!isPending &&
              <Button
                onPress={handleSubmit}
              >
                Login
              </Button>
            }
            {isPending &&
              <Button
                style={{ fontColor: '#ffffff' }}
                title="Loading..."
              />
            }
            <View style={{ alignItems: 'center', paddingVertical: global.spacing.lg }}>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate('SignUp')}
                  style={{ fontSize: global.font.md }}
                >
                  Need an account? Sign up
                </Text>
              </TouchableOpacity>
            </View>
            {error && isPending && Alert.alert('Sorry,', error)}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </GradientBackground>
  )
}

export default LogIn
