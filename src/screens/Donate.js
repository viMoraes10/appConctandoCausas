import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
} from 'react-native';
import { Colors } from 'react-native-paper';
import MessageUser from './MessageUser';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../core/theme';
import Home from './Home';


export default function Donate({ navigation, route }) {

    const { profilePic } = route.params;
    const { description } = route.params;
    const { profileName } = route.params;

    return (

        <View style={styles.container}>
            <View style={styles.profile}>


                <View style={styles.headFeed}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Image
                            source={{ uri: profilePic }}
                            style={styles.roundedImage}
                        />
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleOng}>
                            {profileName}
                        </Text>
                        <Text style={styles.descriptionOng}>
                            {description}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.content}>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    currentUserMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'lightblue',
    },
    otherUserMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'grey',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    footer: {
        padding: 14,
        backgroundColor: theme.colors.textInput,
        borderTopColor: theme.colors.primary,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        borderRadius: 8,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.textInput,
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 12,
    },
    fildMessage: {
        marginLeft: 12
    },
    profile: {
        height: 80, // Define a altura do retângulo
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundedImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'white',
    },
    textContainer: {
        marginLeft: 10,
    },
    titleOng: {
        fontFamily: 'Roboto',
        fontSize: 12,
        alignItems: 'flex-start',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 5,
        height: 20,
    },
    descriptionOng: {
        fontFamily: 'Roboto',
        fontSize: 12,
        alignItems: 'flex-start',
        marginLeft: 5,
    },
    headFeed: {
        width: '100%',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'flex-start',
        marginTop: 5,
        padding: 5,
    },
})
