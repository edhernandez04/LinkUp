import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ChatRoom from './ChatRoom.js';

export default class Channel extends React.Component {

state = {
    chatRooms: [],
    newRoomName: ''
}

componentDidMount() {
    fetch('http://10.0.2.2:3000/channels')
        .then(resp => resp.json())
        .then(chatRooms => this.setState({chatRooms}))
}

renderMessage = (message) => {
    return ( <View><Text>{message.content}</Text></View> )
}

newChatSubmit = () => {
    fetch('http://10.0.2.2:3000/channels', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name: this.state.newRoomName })
    }).then(response => response.json())
        .then(chatRoom => this.setState({ chatRooms: [...this.state.chatRooms, chatRoom] }) )
}

createChannelWebsocketConnection = channelId => {
    let socket = new WebSocket('ws://10.0.2.2:3000/cable')

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
        console.log(JSON.stringify(msg))
    };

    socket.onclose = function(event) { console.log('WebSocket is closed.') };

    socket.onmessage = function(event) {
        const response = event.data;
        const msg = JSON.parse(response);
            if (msg.type === "ping") { return }
            console.log("FROM RAILS: ", msg)
            if (msg.message) { this.renderMessage(msg.message) }
    };

    socket.onerror = function(error) {
        console.log('WebSocket Error: ' + error.message);
    };
}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.roomContainer}>
                    <Text>Start New Chat Room</Text>
                    <TextInput style={styles.roomContainer} placeholder="Room Name" value={this.state.newRoomName} name="newRoomName" onChangeText={newRoomName => {this.setState({newRoomName})}}/>
                    <Button title="submit" onPress={this.newChatSubmit} />
                </View>
                <View style={styles.roomContainer}>
                    <Text>All Rooms</Text>
                    <View>
                        {this.state.chatRooms.map(room =>
                            <View style={styles.allRooms} key={room.id}>
                                <Text>{room.name}</Text>
                                <Button title="Join" onPress={() => Actions.messages(room)}></Button>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        );
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
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
})