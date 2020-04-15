import React, { Component } from 'react';
import { TextInput, View, Text, Button, StyleSheet, ImageBackground, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
    fetch(`http://10.0.2.2:3000/users/${this.props.currentUser.id}`, {
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
                Actions.home({currentUser: response})
            }
        })
}

render(){
    return (
        <View style={styles.container}>
        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/atlas.jpg')} >
        <ScrollView>
        <Text style={styles.theTitle}>Edit Profile</Text>
            <View>
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} placeholder={this.props.currentUser.userName} value={this.state.username} name="username" onChangeText={username => {this.setState({username})}}/>
                <TextInput style={styles.inputText} placeholder={this.props.currentUser.fullName} value={this.state.fullName} name="fullName" onChangeText={fullName => {this.setState({fullName})}}/>
                </View>
                <View style={styles.avatarContainer}>
                    {this.state.avatars.map(tar =>
                        <TouchableHighlight key={tar.id} onPress={() => this.setState({avatar: tar.image})}>
                            <View style={styles.avatarCard}>
                                <Image source={{uri: tar.image}} style={styles.avatarImage} />
                                <Text style={{color: 'white', justifyContent: 'center'}}> {tar.name} </Text>
                            </View>
                        </TouchableHighlight>
                    )}
                </View>
                <Button title="Update" onPress={() => {this.handleSubmit()}} />
            </View>
        </ScrollView>
        </ImageBackground>
        </View>
    );
}

}

const styles = StyleSheet.create({
    avatarImage: {
        width: 130,
        height: 150,
        margin: 5
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    avatarContainer: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    container: {
         flex: 1,
         alignItems: 'center'
    },
    theTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        top: 15,
        left: 75,
        margin: 10
    },
    inputText: {
        width: 175,
        padding: 15,
        margin: 20,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'black',
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
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 20,
        padding: 5,
        margin: 5,
        width: '90%',
        height: 200
    }
});