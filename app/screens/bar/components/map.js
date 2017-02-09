import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import MapStyle from './map-styles/silver.json';

import assetPin from '../../../../img/pin.png';

export default class Map extends React.Component {

  render() {
    const { bar } = this.props;

    return (
      <MapView
        pitchEnabled={false}
        region={{
          latitude: bar.position.latitude,
          longitude: bar.position.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0,
        }}
        style={{ height: 300 }}
        provider="google"
        loadingEnabled={true}
        scrollEnabled={true}
        loadingIndicatorColor="#3F51B5"
      >
        <MapView.Marker
          coordinate={bar.position}
          title={bar.title}
          description={bar.address.street}
          image={assetPin}
        />
      </MapView>
    );
  }
}