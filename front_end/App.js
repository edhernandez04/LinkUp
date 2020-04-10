import React, { Component } from 'react';
import { AppRegistry, View, AsyncStorage, PermissionsAndroid } from 'react-native';
import Routes from './Routes.js';
import { Actions } from 'react-native-router-flux';

class App extends Component {

state = {
    currentUser: null,
    latitude: 0,
    longitude: 0
}

getLocation = () => {
    const granted = PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
        if (granted) {
            console.log( "TRACKER ACTIVATED" )
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let latitude = JSON.stringify(position.coords.latitude)
                    let longitude = JSON.stringify(position.coords.longitude)
                        fetch('http://10.0.2.2:3000/users/${this.state.currentUser.id}', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify({
                                latitude: latitude,
                                longitude: longitude
                             })
                        })
                    this.setState({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) })
                }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 } )
        } else {
            console.log( "ACCESS_FINE_LOCATION permission denied" )
        }
}

setUser = response => {
    AsyncStorage.setItem('token', response.token);
    this.setState({ currentUser: response.user })
    Actions.home(response.user)
}

logout = () => {
    this.setState({ currentUser: null });
    AsyncStorage.removeItem('token')
    Actions.login()
}

   render() {
      return (
         <Routes
             latitude={this.state.latitude}
             longitude={this.state.longitude}
             currentUser={this.state.currentUser}
             setUser={this.setUser}
             setEditUser={this.setEditUser}
             logout={this.logout}
             getLocation={this.getLocation}
         />
      )
   }
}
export default App
AppRegistry.registerComponent('App', () => App)