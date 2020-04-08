import React, { Component } from 'react';
import { TextInput, View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Login extends React.Component {

state = {
    username: "",
    password: ""
}
  
handleLogIn = () => {
    fetch('http://10.0.2.2:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            userName: this.state.username,
            password: this.state.password
        })
    })
        .then(resp => resp.json())
        .then(response => {
            if (response.errors){
                alert(response.errors)
            } else {
                this.props.setUser(response)
            }
        })
}
  
render() {
    return (
        <View style={styles.container}>
        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/atlas.jpg')} >
            <Text style={styles.theTitle}>QuestGPS</Text>
            <View style={styles.loginForm}>
            <TextInput style={styles.inputText} placeholder="username" value={this.state.username} name="username" onChangeText={username => {this.setState({username})}}/>
            <TextInput style={styles.inputText} placeholder="password" value={this.state.password} name="password" onChangeText={password => {this.setState({password})}}/>
            <Button title="Login" onPress={() => {this.handleLogIn()}} />
                <Text style={styles.newAccLine} >Dont have an account? </Text>
                <Button title="Sign Up" onPress={() => {Actions.signup()}} />
            </View>
        </ImageBackground>
        </View>
    )
}

}

  const styles = StyleSheet.create({
    container: {
         flex: 1,
         alignItems: 'center'
    },
    theTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        position: 'absolute',
        top: '3%'
    },
    loginForm: {
        backgroundColor: 'black',
        alignItems: 'center',
        width: 300,
        height: 400,
        padding: 30,
        borderRadius: 50
    },
    inputText: {
        width: 200,
        padding: 15,
        margin: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    newAccLine: {
        paddingTop: 30,
        padding: 10,
        color: 'white'
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.9
    }
  });
   