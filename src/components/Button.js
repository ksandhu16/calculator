import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

export default props => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  )
}

const buttonSize = Dimensions.get('window').width / 4
const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: buttonSize,
    width: buttonSize,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  }
})
