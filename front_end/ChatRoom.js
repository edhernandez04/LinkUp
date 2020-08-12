import React from 'react';
import { View, StyleSheet, Text, Button, Image, ImageBackground, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChatRoom extends React.Component {

state = {
    content: '',
    allMessages: [],
    chatMessages: [],
    allUsers: []
}

componentDidMount() {
    fetch('http://127.0.0.1:3000/messages')
        .then(resp => resp.json())
        .then(allMessages => this.setState({allMessages}))
        .then(() => this.setChat())

    fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(allUsers => this.setState({allUsers}))
}

setChat = () => {
    let rightInfo = this.state.allMessages.filter(message => message.channel_id === this.props.chat.id)
    this.setState({ chatMessages: rightInfo })
}

findUser = (message) => {
    let person = this.state.allUsers.find(user => user.id === message.user_id)
    if (person) {
        return (person.userName)
    } else {
        return ("...pending")
    }
}

newMessage = () => {
    fetch('http://127.0.0.1:3000/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            content: this.state.content,
            channel_id: this.props.chat.id,
            user_id: this.props.currentUser.id
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
                <Text style={styles.title}> {this.props.chat.name} </Text>
            </View>

            <ScrollView style={styles.messageContainer}>
                {this.state.chatMessages.map( message => {
                    if (message.user_id === this.props.currentUser.id){
                        return (
                        <View style={styles.messageRow}>
                            <View>
                                <Text style={styles.nameOfUser}> {this.props.currentUser.userName} </Text>
                            </View>
                            <View style={styles.messageBubble} >
                                <Text style={styles.theMessage} key={message.id}>{message.content}</Text>
                            </View>
                        </View>
                    )} else {
                        return (
                        <View style={styles.altMessageRow}>
                            <View style={styles.altMessageBubble} >
                                <Text style={styles.altTheMessage} key={message.id}>{message.content}</Text>
                            </View>
                            <View>
                                <Text style={styles.nameOfUser}> {this.findUser(message)} </Text>
                            </View>
                        </View>
                    )}
                }
                )}
            </ScrollView>
            <View style={styles.sendNewMessage}>
                <TextInput placeholder="message..." value={this.state.content} onChangeText={content => this.setState({content})}/>
                <Button title="send" onPress={this.newMessage} />
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
        fontSize: 22,
        fontWeight: 'bold'
    },
    theMessage: {
        color: 'white'
    },
    altTheMessage: {
        color: 'black'
    },
    messageBubble: {
        backgroundColor: 'dodgerblue',
        fontSize: 16,
        borderRadius: 15,
        padding: 17,
        margin: 4,
        height: 25,
        justifyContent: 'center'
    },
    altMessageBubble: {
        backgroundColor: 'whitesmoke',
        fontSize: 16,
        borderRadius: 15,
        padding: 17,
        margin: 4,
        height: 25,
        justifyContent: 'center'
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    altMessageRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    nameOfUser: {
        fontSize: 10
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
        height: 480,
        width: 370,
        left: 20,
        top: 60
    }
})