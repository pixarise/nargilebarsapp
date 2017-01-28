import React, { Component } from 'react'
import {
  View,
  ListView,
  ToolbarAndroid,
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight
} from 'react-native'

import Row from './parts/row'
import Bar from './model'
import TheBar from './bar'

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

export default class List extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  
    this.state = {
      bars: ds.cloneWithRows([]),
      bar: null
    }
  }

  componentWillMount() {
    Bar.all().then((v) => {
      this.setState({
        bars: this.state.bars.cloneWithRows(v)
      })
    })
  }

  row(o) {
    var self = this;
    return <Row key={o.key} data={o} onBarSelection={(bar) => self.showBar(bar)} />
  }

  showBar(bar) {
    this.setState({
      bar: bar
    })
  }

  closeBar() {
    this.setState({
      bar: null
    })
  }

  render() {
    return (
      <View style={theme.container}>
        <ToolbarAndroid
          style={theme.toolbar}
          title="Nargile Bars"
          titleColor="#ffffff"
          subtitleColor="#ffffff"
        />

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.bar ? true:false}
          onRequestClose={() => this.closeBar()}>
          <TheBar data={this.state.bar} />
        </Modal>

        <ListView
          enableEmptySections={true}
          dataSource={this.state.bars}
          renderRow={(o) => this.row(o)}
        />
      </View>
    )
  }
}