import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {

//  _getLocation = async () => {
//    navigator.geolocation.getCurrentPosition(position => {
//      const region = {
//        latitude: position.coords.latitude,
//        longitude: position.coords.longitude,
//        latitudeDelta: 0.003,
//        longitudeDelta: 0.0003
//      };
//      this.map.animateToRegion(region, 500);
//    });
//  };

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} showsCompass={true} showsMyLocationButton={true}
            region={{
                latitude: this.props.latitude,
                longitude: this.props.longitude,
                latitudeDelta: 0.003,
                longitudeDelta: 0.0003
              }} >

    <MapView.Marker image={require('./assets/turtle.png')} coordinate={{"latitude":this.props.latitude, "longitude":this.props.longitude}} title={"You"}/>
    <MapView.Marker image={require('./assets/yamcha.png')} coordinate={{"latitude":this.props.latitude + 0.0003, "longitude":this.props.longitude + 0.0005}} title={"Yamcha"}/>
    <MapView.Marker image={require('./assets/goku.png')} coordinate={{"latitude":this.props.latitude - 0.0013, "longitude":this.props.longitude + 0.0003}} title={"Goku"}/>

        </MapView>
          <View style={styles.menuContainer}>
          <Text style={styles.text}>Current User</Text>
          </View>
          
          <View style={styles.menuContainer}>
              <View style={styles.buttonContainer}>
                    <Button title={"Chat"} style={styles.buttonStyle} onPress={() => Actions.chat()} color="red"/>
              </View>
              <View style={styles.buttonContainer}>
                    <Button title={"Login"} onPress={() => Actions.login()} color="blue"/>
              </View>
              <View style={styles.buttonContainer}>
                    <Button title={"Sign Up"} onPress={() => Actions.signup()} color="green"/>
              </View>
              <View style={styles.buttonContainer}>
                    <Button title={"Settings"} onPress={() => {}} color="grey"/>
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
      height: '85%'
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
      justifyContent: 'center',
    },
    buttonContainer: {
      flex: 1,
    },
    findImage: {
    height: 34,
    width: 34
    }
  });