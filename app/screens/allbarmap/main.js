import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Map from './components/map';

const theme = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3F51B5',
    height: 56,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    elevation: 4,
  },
});

export default class AllBarMapScreen extends React.Component {
  static navigationOptions = {
    header: { visible: false }
  };

  render() {
    const { bars } = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;

    return (
      <View style={theme.container}>
        <Icon.ToolbarAndroid
          title="Χάρτης"
          titleColor="#fff"
          navIconName="arrow-back"
          onIconClicked={() => goBack()}
          style={theme.toolbar} />
        <Map bars={bars} />
      </View>
    );
  }
}