import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Communications from 'react-native-communications';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Map from './components/map';
import Info from './components/info';

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


export default class BarScreen extends React.Component {
  static navigationOptions = {
    header: { visible: false }
  };

  static toolbarActions = [
    {
      title: 'Κλήση',
      iconName: 'call',
      show: 'always',
    }
  ];

  doAction(pos) {
    const { bar } = this.props.navigation.state.params;
    const { iconName } = BarScreen.toolbarActions[pos];

    switch(iconName) {
      case 'call':
        Communications.phonecall(bar.phone, true)
      break;

      default: console.error('No Action is set for ', action); break;
    }
    return;
  }

  render() {
    const { bar } = this.props.navigation.state.params;

    return (
      <View style={theme.container}>
        <Icon.ToolbarAndroid
          title={bar.title}
          titleColor="#fff"
          navIconName="arrow-back"
          onIconClicked={() => this.props.navigation.goBack()}
          actions={BarScreen.toolbarActions}
          onActionSelected={(pos) => this.doAction(pos)}
          style={theme.toolbar} />

        <Map bar={bar} />
        <Info bar={bar} />
      </View>
    );
  }
}