import React from 'react'
import { View, StyleSheet, Text, Button, Modal, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const UserShow = (props) => (

        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/scroll.png')} >
        <View style={styles.mainContainer}>
            <View style={styles.avatarCard}>
                <Image source={props.avatar} />
                <Text style={styles.inputs}>{props.userName}</Text>
            </View>
            <View style={styles.infoCard}>
                <Text style={styles.inputs}>{props.fullName}</Text>
                <Text style={styles.inputs}>Last Known Location:</Text>
                <Text style={styles.inputs}>{props.latitude}, {props.longitude} </Text>
                <Button title="Start Chat" onPress={() => Actions.chat()}/>
            </View>
        </View>
        </ImageBackground>
)

export default UserShow

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        padding: 15
    },
    avatarCard: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderRadius: 25,
        width: 200,
        height: 200
    },
    infoCard: {
        alignItems: 'center',
        padding: 20,
    },
    inputs: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
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