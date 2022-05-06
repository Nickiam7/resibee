import React, { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,

} from 'react-native'

import {
  Button,
  GradientBackground,
  Input,
  Logo
} from '@components'

import { useForgotPassword } from '@hooks'

const ForgotPassword = () => {
  const { forgotPassword, error, isPending } = useForgotPassword()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const handleSubmit = () => {
    const { email } = form
    forgotPassword(email)
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
            <Input
              value={form.email}
              autoCapitalize='none'
              onChangeText={(value) => setFormInput('email', value)}
              keyboardType='email-address'
              placeholder='Email'
              returnKeyType='done'
              clearButtonMode='while-editing'
            />
            {!isPending &&
              <Button
                onPress={handleSubmit}
              >
                Reset Password
              </Button>
            }
            {isPending &&
              <Button>
                <ActivityIndicator
                  color="#ffffff"
                />
              </Button>
            }
            {error && isPending && Alert.alert('Sorry,', error)}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </GradientBackground>
  )
}

export default ForgotPassword
