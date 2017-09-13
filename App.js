import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView,  { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends React.Component {
  constructor() {
    super();
    this.mapRef = null;
    this.state = {
      markers: []
    };
  }

  onLayoutCalled() {
    let markers = this.state.markers;
    markers.push(
      (
        <MapView.Marker
          coordinate={{
            latitude: 53.2734,
            longitude: -7.77832031
          }}
          title={"TT"}
          description={"des"}
          key={1}
        />
      )
    );
    //
    if(this.mapRef) {
      // this.mapRef.fitToSuppliedMarkers(
      //   markers,
      //   true, // not animated
      // );
      console.log('Map is loaded');
    } else {
      console.log('Map is not loaded yet');
    }
    this.setState({
        markers : markers
    });
  }

  render() {
    return (
        <MapView ref={(ref) => { this.mapRef = ref }}
            style={styles.map}
            onLayout={this.onLayoutCalled.bind(this)}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 53.2734,
              longitude: -7.77832031,
              latitudeDelta: 1.1922,
              longitudeDelta: 5.0421,
            }}
          >
            { this.state.markers }
          </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
