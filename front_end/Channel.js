import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Channel extends React.Component{

state = {
    chatRooms: []
}

componentDidMount(){
    fetch('http://10.0.2.2:3000/channels')
        .then(resp => resp.json())
        .then(chatRooms => this.setState({chatRooms}))
}

    createChannelWebsocketConnection(event, channelId) {
        event.preventDefault()
        let socket = new WebSocket('ws://10.0.2.2:3000/cable');
        console.log(WebSocket)

        socket.onopen = function(event) {
            console.log('WebSocket is connected.');
            const msg = {
                command: 'subscribe',
                identifier: JSON.stringify({
                    id: channelId,
                    channel: 'ChannelChannel'
                }),
            };
            socket.send(JSON.stringify(msg));
        };

        socket.onclose = function(event) {
             console.log('WebSocket is closed.');
        };

        socket.onmessage = function(event) {
            const response = event.data;
            const msg = JSON.parse(response);
                if (msg.type === "ping") { return; }
            console.log("FROM RAILS: ", msg);
                if (msg.message) { renderMessage(msg.message) }
        };

        socket.onerror = function(error) {
            console.log('WebSocket Error: ' + error.message);
        };
    }

    newMessage = event => {
        event.preventDefault();
        fetch(`http://10.0.2.2:3000/messages`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                content: event.target[0].value,
                chat_room_id: event.target.dataset.chatRoomId
            })
        })
        // .then(response => response.json())
        // .then(messageObject => {renderMessage(messageObject)})
        newMessageForm.reset();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.roomContainer}>
                    <Text>Start Chat</Text>
                    <TextInput style={styles.roomContainer} placeholder="Room Name" />
                    <Button title="submit" onPress={(event) => {this.createChannelWebsocketConnection(event, 1)}} />
                </View>
                <View style={styles.roomContainer}>
                    <Text>All Rooms</Text>
                    <View>
                        {this.state.chatRooms.map(room => <Text>{room.name}</Text>)}
                    </View>
                </View>
                <View style={styles.roomContainer}>
                    <Text>New Message</Text>
                    <TextInput style={styles.roomContainer} placeholder="message..." />
                    <Button title="submit" onPress={() => {this.newMessage()}} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 50
    },
    roomContainer: {
        paddingBottom: 25,
        textAlign: "center"
    },
    inputDiv: {
        height: 20
    }
});