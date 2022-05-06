import { useState, useRef } from 'react'
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import {
  AuthLinks,
  Button,
  GradientBackground,
  Input,
  Logo
} from '@components'

import { useSignup } from '@hooks'

const SignUp = ({ navigation }) => {
  const [form, setForm] = useState({
    email: '',
    displayName: '',
    password: ''
  })
  const { signup, isPending, error } = useSignup()

  const setFormInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const displayNameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = () => {
    const { email, password, displayName } = form
    signup(email, password, displayName)
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
                displayNameRef.current?.focus()
              }}
              blurOnSubmit={false}
            />
            <Input
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
                Sign up
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
              linkTo='LogIn'
            >
              Already have an account? Login
            </AuthLinks>
            {error && isPending && Alert.alert('Sorry,', error)}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </GradientBackground>
  )
}

export default SignUp
