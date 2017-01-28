import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ScrollView,
  AsyncStorage,
  StatusBar,
  ListView
} from 'react-native'

const theme = StyleSheet.create({
    
})

export default class NargileBarsApp extends Component {
  render() {
    return (
      <View style={theme.container}>

        <StatusBar backgroundColor="#3949AB" barStyle="light-content" />

        

        <View style={theme.content}>
          {/*<TextInput
            style={theme.search}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            multiline={false}
          />*/}
        </View>

      </View>
    )
  }
}