import React, { Component } from 'react';
import { TextInput, View, Text, Button, StyleSheet, ImageBackground, Actions } from 'react-native';

export default class UpdateUser extends React.Component {

state = {
    username: '',
    fullName: '',
    avatar: '',
    avatars: []
}

componentDidMount() {
    fetch('http://10.0.2.2:3000/avatars')
        .then(resp => resp.json())
        .then(avatars => this.setState({avatars}))
}

handleSubmit = () => {
    fetch('http://10.0.2.2:3000/users/${this.props.id}', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            userName: this.state.username,
            fullName: this.state.fullName,
            avatar: this.state.avatar
        })
    })
        .then(resp => resp.json())
        .then(response => {
            if (response.errors) {
            alert(response.errors)
            } else {
                Actions.home()
            }
        })
}

render(){
    return (
        <View style={styles.container}>
        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/atlas.jpg')} >
        <Text style={styles.theTitle}>Edit Profile</Text>
            <View style={styles.signupForm}>
                <TextInput style={styles.inputText} placeholder="username" value={this.state.username} name="username" onChangeText={username => {this.setState({username})}}/>
                <TextInput style={styles.inputText} placeholder="full name" value={this.state.fullName} name="fullName" onChangeText={fullName => {this.setState({fullName})}}/>
                {this.state.avatars.map(tar =>
                    <View style={styles.avatarCard}>
                        <Image src={tar.image} />
                        <Text> tar.name </Text>
                    </View>
                )}
                <Button title="Update" onPress={() => {this.handleSubmit()}} />
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
        width: '90%',
        height: '80%',
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
    },
    avatarCard:{
        backgroundColor: 'red'
    }
});