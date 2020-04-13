import React, { Component } from 'react';
import { TextInput, View, Text, Button, StyleSheet, ImageBackground, Actions } from 'react-native';

export default class SignUp extends React.Component {

state = {
    username: "",
    password: "",
    passwordConfirmation: ""
}

handleSubmit = () => {
    if (this.state.password === this.state.passwordConfirmation){
        fetch('http://10.0.2.2:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                userName: this.state.username,
                password: this.state.password,
                latitude: 40.7812648,
                longitude: -73.968828
            })
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.errors) {
                    alert(response.errors)
                } else {
                    this.props.setUser(response);
                }
            })
    } else {
        alert("Passwords don't match")
    }
}

render(){
    return (
        <View style={styles.container}>
        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/atlas.jpg')} >
        <Text style={styles.theTitle}>QuestGPS</Text>
            <View style={styles.signupForm}>
                <TextInput style={styles.inputText} placeholder="username" value={this.state.username} name="username" onChangeText={username => {this.setState({username})}}/>
                <TextInput style={styles.inputText} placeholder="password" value={this.state.password} name="password" onChangeText={password => {this.setState({password})}}/>
                <TextInput style={styles.inputText} placeholder="confirm password" value={this.state.passwordConfirmation} name="passwordConfirmation" onChangeText={passwordConfirmation => {this.setState({passwordConfirmation})}}/>
                <Button title="register" onPress={this.handleSubmit} />
            </View>
        </ImageBackground>
        </View>
    );
}

}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         alignItems: 'center'
    },
    signupForm: {
        backgroundColor: 'black',
        alignItems: 'center',
        width: 300,
        height: 400,
        padding: 35,
        borderRadius: 50
    },
    theTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        position: 'absolute',
        top: '3%'
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
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.9
    }
});