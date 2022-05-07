import { useState, useRef } from 'react'
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { useLogin } from '@hooks'

import {
  AuthLinks,
  Button,
  GradientBackground,
  Input,
  Logo
} from '@components'

import { global } from '@globals'

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
            <Input
              value={form.email}
              autoCapitalize='none'
              onChangeText={(value) => setFormInput('email', value)}
              keyboardType='email-address'
              placeholder='Email'
              returnKeyType='next'
              clearButtonMode='while-editing'
              blurOnSubmit={false}
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
            <View style={{ alignItems: 'flex-end', paddingVertical: global.spacing.md }}>
              <Text
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                Forgot password?
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
              <Button>
                <ActivityIndicator
                  color="#ffffff"
                />
              </Button>
            }
            <AuthLinks
              navigation={navigation}
              linkTo='SignUp'
            >
              Need an account? Sign up
            </AuthLinks>
            {error && isPending && Alert.alert('Sorry,', error)}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </GradientBackground>
  )
}

export default LogIn
