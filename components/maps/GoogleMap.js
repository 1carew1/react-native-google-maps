import React from 'react';
import { StyleSheet } from 'react-native';
import MapView,  { PROVIDER_GOOGLE } from 'react-native-maps';

export default class GoogleMap extends React.Component {
  constructor() {
    super();
    this.mapRef = null;
    this.state = {
      markers: []
    };
  }

  onLayoutCalled() {
    let markers = this.state.markers;
    const latLng = {
      latitude: 53.2734,
      longitude: -7.77832031
    };
    markers.push(
      (
        <MapView.Marker
          coordinate={latLng}
          title={"Example Marker"}
          description={"Marker Description"}
          key={1}
        />
      )
    );
    this.setState({
        markers : markers
    });
  }

  // Note region changed only appears to work in ios
  regionChanged(event){
    console.log('region changed');
    console.log(this.mapRef.region);
    console.log(event);
  }

  render() {
    return (
        <MapView ref={(ref) => { this.mapRef = ref }}
            style={styles.map}
            onLayout={this.onLayoutCalled.bind(this)}
            onRegionChange={this.regionChanged.bind(this)}
            provider={PROVIDER_GOOGLE}
            region={
              {
                "latitude": 53.47314036728332,
                "latitudeDelta": 6.261443390392806,
                "longitude": -7.968024406582117,
                "longitudeDelta": 5.928222723305225,
              }
            }
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
