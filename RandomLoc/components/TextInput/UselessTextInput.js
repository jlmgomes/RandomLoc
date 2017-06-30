import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';
import TextField from 'react-native-md-textinput';


export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'NONE' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, width: 200, borderColor: 'gray'}}
        onChangeText={(text) => this.setState({text})}
        placeholder= {this.props.text}
        keyboardType= {this.props.intputType}
        secureTextEntry = {this.props.caretHidden}
      />
    );
  }
}