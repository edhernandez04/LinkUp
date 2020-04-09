import React from 'react';
import { View, StyleSheet, Text, Button, Image, ImageBackground, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChatRoom extends React.Component {

state = {
    content: '',
    allMessages: [],
    chatMessages: []
}

componentDidMount() {
    fetch('http://10.0.2.2:3000/messages')
        .then(resp => resp.json())
        .then(allMessages => this.setState({allMessages}))
        .then(this.setChat())
}

setChat = () => {
    this.setState({
        chatMessages: this.state.allMessages.map(message => message.channel_id === this.props.id)
    })
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
            channel_id: this.props.id
        })
    }).then(response => response.json())
    .then(message => this.setState({ chatMessages: [...this.state.chatMessages, message] }) )
}

render() {
console.log(this.state.chatMessages)
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {this.props.navigation.state.params.name} </Text>
            </View>
            <View style={styles.messageContainer}>
                {this.state.allMessages.map(message =>
                    <View style={styles.messageBubble} key={message.id}>
                        <Text>{message.content}</Text>
                    </View>
                )}
            </View>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    titleContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
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
    messageContainer: {
        backgroundColor: 'blue',
        width: 370,
        height: 'auto',
        padding: 10,
        borderRadius: 5
    },
    messageBubble: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingLeft: 10,
        margin: 2
    }
})