import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const theme = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    padding: 20
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  addressBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.05)'
  }
});

export default class Info extends React.Component {

  render() {
    const bar = this.props.bar;

    return (
      <View style={theme.container}>
        <Text style={theme.title}>{bar.title}</Text>
        <Text>{bar.phone}</Text>

        <View style={theme.addressBox}>
          <Text>{bar.address.street}</Text>
          <Text>{bar.address.area}</Text>
          <Text>{bar.address.region}</Text>
          <Text>{bar.address.zip}</Text>
        </View>
      </View>
    );
  }
}