import React from 'react';
import { AppRegistry,  Text} from 'react-native';
import GoogleMap from './components/maps/GoogleMap';


export default class App extends React.Component {

  componentDidMount(){
  	navigator.geolocation.getCurrentPosition((position) => {
  		const lat = parseFloat(position.coords.latitude);
  		const lng = parseFloat(position.coords.longitude);
  		const latLng = {
  			latitude: lat,
  			longitude: lng
  		};
  		console.log('Obtained LatLng');
  		console.log(latLng);
  	},
  	(error) => {
      console.log('Error getting location from navigator');
      console.log(error);
    },
  	{enabledHighAccuracy: true, timeout: 2000, maximumAge: 1000});
  }

  render() {
    return (
        <GoogleMap />
    );
  }
}
