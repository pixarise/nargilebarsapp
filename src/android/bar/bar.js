import React, { Component } from 'react'
import {
  View,
  ToolbarAndroid,
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight
} from 'react-native'

import Row from './parts/row'
import Bar from './model'

const theme = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,    
  },
  toolbar: {
    backgroundColor: '#3F51B5',
    height: 56,
  },
  content: {
    flex: 1,
    backgroundColor: '#3F51B5',
  }
})

export default class TheBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bar: this.props.data
    }
  }

  render() {
    var self = this;

    return (
      <View>
        <ToolbarAndroid
          style={theme.toolbar}
          title={this.state.bar.title}
          titleColor="#ffffff"
          subtitleColor="#ffffff"
        />

        <Text>{this.state.bar.description}</Text>

        <TouchableHighlight onPress={() => self.props.onRequestClose()}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>

      </View>
    )
  }
}