import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  StatusBar,
  TextInput,
  ViewPagerAndroid
} from 'react-native'

import List from './bar/list'

const theme = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,    
  },
  content: {
    flex: 1,
    backgroundColor: '#3F51B5',
  },
  search: {
    height: 50,
    borderColor: 'transparent',
    backgroundColor: '#ffffff',
    borderRadius: 2,
    marginRight: 20,
    marginLeft: 20,
  },

  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
})

export default class NargileBarsApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Όνομα ή διεύθυνση καταστήματος' };
  }

  render() {
    return (
      <View style={theme.container}>

        <StatusBar backgroundColor="#3949AB" barStyle="light-content" />

        <List />

      </View>
    )
  }
}