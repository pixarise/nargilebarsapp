import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  ListView,
  Modal,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Row from './components/row'
import Bar from '../../models/bar'

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
  centering: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapBtn: {
    marginRight: 20,
    color: '#3F51B5'
  }
})

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: {
      visible: false,
    },
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      loading: true,
      bars: ds.cloneWithRows([]),
      barsRaw: [],
      bar: null
    }
  }

  componentWillMount() {
    Bar.all().then((v) => {
      this.setState({
        loading: false,
        bars: this.state.bars.cloneWithRows(v),
        barsRaw: v
      })
    })
  }

  showAllBarMap() {
    const { navigate } = this.props.navigation;
    navigate('AllBarMap', { bars: this.state.barsRaw })
  }

  showBar(bar) {
    const { navigate } = this.props.navigation;
    navigate('Bar', { bar: bar })
  }

  render() {
    return (
      <View style={theme.container}>
        <StatusBar backgroundColor="#303F9F" barStyle="light-content" />
        <Icon.ToolbarAndroid
          title="Nargile Bars"
          titleColor="#fff"
          actions={[{title: 'Χάρτης', iconName: 'map', show: 'always'}]}
          onActionSelected={() => this.showAllBarMap()}
          style={theme.toolbar} />

        {this.state.loading ?
          <ActivityIndicator
            animating={this.state.loading}
            style={theme.centering}
            size="large"
            color="#3F51B5"
          />:<View></View>
        }

        <ListView
          enableEmptySections={true}
          dataSource={this.state.bars}
          renderRow={(o) => <Row key={o.key} data={o} onBarRequest={(bar) => this.showBar(bar)}
          />}
        />
      </View>
    );
  }
}