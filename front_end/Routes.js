import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Channel from './Channel.js'
import Login from './Login.js'
import SignUp from './SignUp.js'
import UserShow from './UserShow.js'
import ChatRoom from './ChatRoom.js'
import UpdateUser from './UpdateUser.js'

const Routes = (props) => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home"
            currentUser={props.currentUser}
            setUser={props.setUser}
            logout={props.logout}
            getLocation={props.getLocation}
            latitude={props.latitude}
            longitude={props.longitude}
         />
         <Scene key = "chat" component = {Channel} title = "Group Chats"
            currentUser={props.currentUser}
         />
          <Scene key = "messages" component = {ChatRoom} title = "Chat Room"
             currentUser={props.currentUser}
          />
         <Scene key = "login" component = {Login} title = "Login"
            initial = {true}
            setUser={props.setUser}
         />
         <Scene key = "signup" component = {SignUp} title = "Sign Up"
            setUser={props.setUser}
         />
         <Scene key = "userShow" component = {UserShow} title = "Friend" />

         <Scene key = "profile" component = {UpdateUser} title = "Update Profile" />
      </Scene>
   </Router>
)
export default Routes