  import React, { Component } from 'react';
  import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
  import { Colors, TextInput } from 'react-native-paper';
  import MessageUser from './MessageUser';

  class Message extends Component{

    constructor(props){
      super(props);
      this.state = {
        message: [
            {
              id: "001",
              text: "Olá, como vai?",
              timestamp: "2023-03-15T12:00:00Z",
              senderId: "user123",
              receiverId: "ong456"
            },
            {
              id: "002",
              text: "Tudo bem, e você?",
              timestamp: "2023-03-15T12:01:00Z",
              senderId: "ong456",
              receiverId: "user123"
            }
          ]
       };
    }

    render(){
      return(
        <View style={styles.areaFeed}>


            <TextInput style={styles.textInput}
            placeholder='Digite uma mensagem...'>

            </TextInput>
        </View>
      );
    }
  }

  export default Message;

  const styles = StyleSheet.create({
    currentUserMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'lightblue',
    },
    otherUserMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'grey',
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    }

  })
