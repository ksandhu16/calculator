import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button label={1} />
          <Button label={2} />
          <Button label={3} />
          <Button label={4} />
          <Button label={5} />
          <Button label={6} />
          <Button label={7} />
          <Button label={8} />
          <Button label={9} />
          <Button label={'-'} />
          <Button label={'+'} />
          <Button label={'*'} />
          <Button label={'/'} />
          <Button label={'='} />
          <Button label={'AC'} />
          <Button label={'.'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
