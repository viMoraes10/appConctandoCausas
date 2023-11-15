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



class Message extends Component {

  constructor(props) {

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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
        </View>

        <KeyboardAvoidingView
          style={styles.footer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>

          <View style={styles.textInput}>
            <TextInput
              // style={{ height: inputHeight }}
              value={msg}
              multiline={true}

            // onContentSizeChange={(e) => setInputHeight(e.nativeEvent.content.content.height + 12)}
            />
          </View>
          <TouchableOpacity
            onPress={() => setMsg(msg)}
          >
            <Icon name="send-sharp"
              size={26}
              color={theme.colors.primary}
              style={styles.fildMessage} />
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    );
  }
}

export default Message;

//const [inputHeight, setInputHeight] = useState(0);
const [msg, setMsg] = '';
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
  }



})
