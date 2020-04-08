import React from 'react'
import { View, StyleSheet, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChatRoom extends React.Component {

state = {
    content: ''
}

renderMessage = (message) => {
    <View><Text>{message.content}</Text><View>
}

newMessage = () => {
    fetch('http://10.0.2.2:3000/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
        content: this.state.content,
        chat_room_id: props.id
        })
    }).then(response => response.json())
    .then(message => {renderMessage(message)})
}

render() {
    return (
        <View>
            <Text> {props.name} </Text>
            <View> {props.messages.map(message => renderMessage(message))} </View>
            <View style={styles.roomContainer}>
                <Text>New Message</Text>
                <TextInput style={styles.roomContainer} placeholder="message..." onChangeText={content => this.setState({content})}/>
                <Button title="submit" onPress={() => {this.newMessage()}} />
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.buttonContainer}>
                    <Button title={"All Chats"} style={styles.buttonStyle} onPress={() => Actions.chat()} color="red"/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={"Home"} onPress={() => Actions.home()} color="gold"/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={"Find Me"} onPress={this.props.getLocation} color="green"/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={"Log Out"} onPress={this.props.logout} color="blue"/>
                </View>
            </View>
        </View>
    )
}

}

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }
})