import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';

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
        fetch('http://10.0.2.2:3000/messages', {
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

//                    <View style={styles.roomContainer}>
//                        <Text>New Message</Text>
//                        <TextInput style={styles.roomContainer} placeholder="message..." />
//                        <Button title="submit" onPress={() => {this.newMessage()}} />
//                    </View>

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.roomContainer}>
                    <Text>Start Chat Room</Text>
                    <TextInput style={styles.roomContainer} placeholder="Room Name" />
                    <Button title="submit" onPress={(event) => {this.createChannelWebsocketConnection(event, this.state.chatRooms.length)}} />
                </View>
                <View style={styles.roomContainer}>
                    <Text>All Rooms</Text>
                    <View>
                        {this.state.chatRooms.map(room =>
                            <View style={styles.allRooms}>
                                <Text>{room.name}</Text>
                                <Button title="Join" onPress={this.openChat}></Button>
                            </View>
                        )}
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
      padding: 25
    },
    roomContainer: {
        paddingBottom: 25,
    },
    inputDiv: {
        height: 20
    },
    allRooms: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'space-around'
    }
});