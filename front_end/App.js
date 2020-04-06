import React, { Component } from 'react';
import { AppRegistry, View, PermissionsAndroid, AsyncStorage} from 'react-native';
import Routes from './Routes.js';
import { Actions } from 'react-native-router-flux';

class App extends Component {

state = {
    currentUser: null,
    latitude: 0,
    longitude: 0
}

componentDidMount(){
    if (this.currentUser !== null){
    const token = AsyncStorage.getItem('token').then((data) => {dispatch(getToken(data))})
    if(token){
      fetch("http://10.0.2.2:3000/auto_login", {
        headers: { "Authorization": token }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
          Actions.login()
        } else {
          this.setState({ currentUser: response })
          Actions.home()
        }
      })
    } else {
      Actions.login()
    }
      const granted = PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
          if (granted) {
              navigator.geolocation.getCurrentPosition(
                  (position) => {
                      let latitude = JSON.stringify(position.coords.latitude)
                      let longitude = JSON.stringify(position.coords.longitude)
                      this.setState({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) })
                  }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
              ), console.log( "TRACKER ACTIVATED" )
          }  else {
            console.log( "ACCESS_FINE_LOCATION permission denied" )
            }
    }
}

setUser = response => {
    this.setState({ currentUser: response },
        () => { AsyncStorage.setItem('token')
             .then((data) => {
                 dispatch(saveToken('token saved'));
             })
        }
    )
}

setEditUser = response => {
    this.setState({
        currentUser: response
    }, () => { Actions.home() })
}

logout = () => {
    this.setState({ currentUser: null},
     () => {  AsyncStorage.removeItem('token').then((data) => { dispatch(removeToken(data)) });
      Actions.login();
    })
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
         />
      )
   }
}

export default App
AppRegistry.registerComponent('App', () => App)