import React, { Component } from 'react';
import { AppRegistry, View, AsyncStorage } from 'react-native';
import Routes from './Routes.js';
import { Actions } from 'react-native-router-flux';

class App extends Component {

state = {
    currentUser: null,
    latitude: 0,
    longitude: 0
}

setUser = response => {
    AsyncStorage.setItem('token', response.token);
    this.setState({ currentUser: response.user })
    Actions.home({currentUser: response.user})
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