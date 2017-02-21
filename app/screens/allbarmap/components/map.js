import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import MapStyle from './map-styles/silver.json';

import assetPin from '../../../../img/pin.png';

/*
<MapView
  pitchEnabled={false}
  region={{
    latitude: bar.position.latitude,
    longitude: bar.position.longitude,
    latitudeDelta: 0.09,
    longitudeDelta: 0,
  }}
  style={{ height: 250 }}
  provider="google"
  loadingEnabled={true}
  cacheEnabled={true}
  customMapStyle={MapStyle}
  loadingIndicatorColor="#3F51B5"
>
  <MapView.Marker
    coordinate={bar.position}
    title={bar.title}
    description={bar.address.street}
    image={assetPin}
  />
</MapView>
*/

export default class Map extends React.Component {
  render() {
    return (
      <MapView
        pitchEnabled={false}
        region={{
          latitude: 37.988976,
          longitude: 23.733902,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        style={{ flex: 1 }}
        provider="google"
        loadingEnabled={true}
        loadingIndicatorColor="#3F51B5"
      >
        {this.props.bars.map((bar, index) => {
            return <MapView.Marker
              key={index}
              coordinate={bar.position}
              title={bar.title}
              description={bar.address.street}
              image={assetPin}
            />
          })
        }
        
      </MapView>
    );
  }
}