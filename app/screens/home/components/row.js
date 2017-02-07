import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native'

const theme = StyleSheet.create({
  row: {
    paddingLeft: 15,
    paddingBottom: 15,
    paddingTop: 15,
    borderWidth: 0.2,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 18,
    color: '#444'
  },
  area: {
    paddingTop: 5,
    fontSize: 15,
    color: '#bbb'
  }
})

export default class Row extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.onBarRequest(this.props.data)}
        background={TouchableNativeFeedback.SelectableBackground()}>

        <View style={theme.row}>
          <Text style={theme.title}>{this.props.data.title}</Text>
          <Text style={theme.area}>
            {this.props.data.address.area}
          </Text>
        </View>

      </TouchableNativeFeedback>
    )
  }
}