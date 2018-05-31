import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';


class Search extends Component {
  state = {
    text: ''
  }
  handleSubmit = () => {
    console.log(this.state.text)

  }
  handleChangeText = (text) => {
    this.setState({
      text
    })
  }
  render() {
    return (
      <TextInput
        placeholder="Busca tu película favorita"
        autoCorrent={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

export default Search;
