import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Channel from './Channel.js'
import Login from './Login.js'
import SignUp from './SignUp.js'

const Routes = (props) => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home"
            currentUser={props.currentUser}
            logout={props.logout}
            getLocation={props.getLocation}
            latitude={props.latitude}
            longitude={props.longitude}
         />
         <Scene key = "chat" component = {Channel} title = "Channel"
            currentUser={props.currentUser}
         />
         <Scene key = "login" component = {Login} title = "Login"
            initial = {true}
            setUser={props.setUser}
         />
         <Scene key = "signup" component = {SignUp} title = "Sign Up"
            setUser={props.setUser}
         />
      </Scene>
   </Router>
)
export default Routes