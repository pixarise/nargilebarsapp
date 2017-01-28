import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
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
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },

  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

export default class NargileBarsApp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  }

  _renderContent = (color: string, pageText: string) => {
    return (
      <View style={[theme.tabContent, {backgroundColor: color}]}>
        <Text style={theme.tabText}>{pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#9FA8DA"
        tintColor="white"
        unselectedItemTintColor="#9FA8DA"
        barTintColor="#3F51B5">

        <TabBarIOS.Item
          icon={require('./icons/shop.png')}
          title="Καταστήματα"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./icons/location.png')}
          title="Κοντά μου"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>

      </TabBarIOS>
    )
  }
}