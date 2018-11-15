import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'

export default props => {
  const stylesButton = [styles.button]
  props.double && stylesButton.push(styles.doubleButton)
  props.triple && stylesButton.push(styles.tripleButton)
  props.operation && stylesButton.push(styles.operationButton)

  return (
    <TouchableOpacity onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const buttonSize = Dimensions.get('window').width / 4
const styles = StyleSheet.create({
  button: {
    height: buttonSize,
    width: buttonSize,
    backgroundColor: '#F0F0F0',
    borderColor: '#888',
    borderWidth: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 40,
    
  },
  operationButton: {
    backgroundColor: '#FA8231',
    color: '#FFF'
  },
  doubleButton: {
    width: buttonSize * 2
  },
  tripleButton: {
    width: buttonSize * 3
  }
})
