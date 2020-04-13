import React from 'react';
import { View, StyleSheet, Text, Button, Image, ImageBackground, TextInput, ScrollView } from 'react-native';
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
        .then(() => this.setChat())
}

setChat = () => {
    let rightInfo = this.state.allMessages.filter(message => message.channel_id === this.props.id)
    this.setState({ chatMessages: rightInfo })
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
    .then(() => this.submitAndClear())
}

submitAndClear = () => {
    this.setState({content: ''})
}

render() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {this.props.navigation.state.params.name} </Text>
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
            <ScrollView style={styles.messageContainer}>
                {this.state.chatMessages.map(message =>
                    <View style={styles.messageBubble} key={message.id}>
                        <Text style={styles.theMessage}>{message.content}</Text>
                    </View>
                )}
            </ScrollView>
            <View style={styles.sendNewMessage}>
                <TextInput placeholder="message..." value={this.state.content} onChangeText={content => this.setState({content})}/>
                <Button title="send" onPress={() => {this.newMessage()}} />
            </View>
        </View>
    )
}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    titleContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        top: 10
    },
    buttonContainer: {
        flex: 1,
    },
    theMessage: {
        color: 'white'
    },
    messageBubble: {
        backgroundColor: 'blue',
        fontSize: 12,
        borderRadius: 15,
        padding: 17,
        margin: 2,
        height: 25,
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    sendNewMessage: {
        bottom: '0%',
        position: 'absolute',
        width: '100%',
        left: '6%',
        backgroundColor: 'white'
    },
    messageContainer: {
        position: 'absolute',
        height: 440,
        width: 370,
        left: 20,
        top: 100
    }
})