import React, { Component } from 'react';
import { AppRegistry, TextInput, Button } from 'react-native';
import TextField from 'react-native-md-textinput';


export default class UselessButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Button
        title={this.props.text}
        />    
        );
    }

}