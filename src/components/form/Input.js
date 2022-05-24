import { forwardRef } from 'react'
import {
  StyleSheet,
  TextInput
} from "react-native"

import { global } from '@globals'

const Input = forwardRef(({ style, label, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      placeholderTextColor={'rgba(0,0,0,0.5)'}
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
    height: 50,
    width: 325,
    borderRadius: global.elements.borderRadius,
    borderWidth: global.elements.borderWidth,
    borderColor: global.elements.input.borderColor,
    marginTop: global.spacing.lg,
    paddingHorizontal: global.spacing.sm,
    backgroundColor: global.elements.input.backgroundColor,
  }
})

export default Input
