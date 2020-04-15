import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Button, Image, PermissionsAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import UserShow from './UserShow.js'

export default class Home extends React.Component {

state = {
    allUsers: []
}

componentDidMount(){
    fetch('http://10.0.2.2:3000/users')
        .then(resp => resp.json())
        .then(allUsers => this.setState({allUsers}))
}

findMe = () => {
    const granted = PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
        if (granted) {
            navigator.geolocation.getCurrentPosition( this.success , this.error , { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 } )
        } else {
            console.log( "ACCESS_FINE_LOCATION permission denied" )
        }
}

success = (position) => {
    let lat = parseFloat(JSON.stringify(position.coords.latitude))
    let lng = parseFloat(JSON.stringify(position.coords.longitude))
        fetch(`http://10.0.2.2:3000/users/${this.props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                latitude: lat,
                longitude: lng
            })
        })
        .then(fetch('http://10.0.2.2:3000/users').then(resp => resp.json())
            .then(allUsers => this.setState({allUsers})))
            .then(this.moveMap(lat, lng))
}

error = (err) => {
    console.log(`ERROR(${err.code}): ${err.message}`)
}

moveMap = (lat, lng) => {
    let r = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.008,
        longitudeDelta: 0.003,
    };
     this.map.animateToRegion(r, 1000)
}

render() {
    return (
        <View style={styles.container}>

            <MapView
                ref={(map) => { this.map = map; }}
                style={styles.mapStyle}
                showsCompass={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                region={{
                    latitude: this.props.currentUser.latitude,
                    longitude: this.props.currentUser.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.003
                }}>

                {this.state.allUsers.map(user =>
                    <MapView.Marker key={user.id}
                        image={user.avatar}
                        coordinate={ {'latitude': user.latitude, 'longitude': user.longitude} }
                        title={user.userName}
                        onPress={() => Actions.userShow(user)}
                    />
                )}
            </MapView>

        <View style={styles.menuContainer}>
            <Text style={styles.text}>{this.props.currentUser.userName} | {this.props.currentUser.fullName}</Text>
        </View>

        <View style={styles.menuContainer}>
            <View style={styles.buttonContainer}>
                <Button title={"Chats"} style={styles.buttonStyle} onPress={() => Actions.chat({currentUser: this.props.currentUser})} color="red"/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Check In"} onPress={this.findMe} color="goldenrod"/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Edit Profile"} onPress={() => Actions.profile({currentUser: this.props.currentUser})} color="green"/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Log Out"} onPress={this.props.logout} color="blue"/>
            </View>
        </View>

        </View>
    );
}

}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 5
    },
    mapStyle: {
        width: '99%',
        height: '88%'
    },
    markerImage:{
        height: 50,
        width: 50,
        alignItems: 'center'
    },
    text: {
        color: '#888',
        padding: 10
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
    },
    findImage: {
        height: 34,
        width: 34
    }
});