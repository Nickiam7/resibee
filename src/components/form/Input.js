import { forwardRef } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View
} from "react-native"

const Input = forwardRef(({ style, label, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      placeholderTextColor={'rgba(0,0,0,0.75)'}
      style={[
        styles.input,
        style,
      ]}
      {...props}
    />
  )
})



const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(254, 220, 159, 0.7777)',
    height: 50,
    marginTop: 25,
    width: 325,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'rgba(253, 224, 185, 0.75)'
  }
})

export default Input
