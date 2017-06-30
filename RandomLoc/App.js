import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import UselessTextInput from './components/TextInput/UselessTextInput.js'
import UselessButton from './components/Button/UselessButton.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50}}
          source={require('./imgs/logo.png')}
        />
        <UselessTextInput text='Email' intputType='email-address'/>
        <UselessTextInput text='Password' caretHidden={true}/>
        <UselessButton text='Login'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});