import React from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  TouchableNativeFeedback,
  Image,Dimensions
} from 'react-native';
import { Config } from '../../../config';
import _ from 'lodash';
import MapStyle from './map-styles/silver.json';

import assetPin from '../../../../img/pin.png';
const { height, width } = Dimensions.get('window');


export default class Map extends React.Component {

  static serialize(obj) {
    var str = [];
    for(var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  }

  _onPressMap() {
    console.log('pressed');
  }

  getGoogleMapImage() {
    const { bar } = this.props;

    let uri = 'https://maps.googleapis.com/maps/api/staticmap?';
    uri += Map.serialize({
      center: bar.position.latitude +','+ bar.position.longitude,
      zoom: 18,
      size: '750x' + parseInt(width * 3),
      markers: 'label:|'+ bar.position.latitude +','+ bar.position.longitude,
      key: Config.googleMapsKey
    });
    console.log(Config);
    console.log(uri);

    return uri
  }

  render() {
    const { bar } = this.props;

    return (
      <TouchableNativeFeedback onPress={this._onPressMap} background={TouchableNativeFeedback.SelectableBackground()}>
        <Image source={{ uri: this.getGoogleMapImage() }} style={{height:250}} />
      </TouchableNativeFeedback>
    );
  }
}