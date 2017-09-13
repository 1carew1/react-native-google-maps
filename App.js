import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView,  { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
        <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 53.2734,
              longitude: -7.77832031,
              latitudeDelta: 1.1922,
              longitudeDelta: 5.0421,
            }}
          >
          {(
            <MapView.Marker
              coordinate={{
                latitude: 53.2734,
                longitude: -7.77832031
              }}
              title={"Marker"}
              description={"DESC"}
            />
          )}
          </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
