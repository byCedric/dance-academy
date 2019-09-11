import React, {useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import {KeyboardAvoidingView, View, Platform, ScrollView} from 'react-native';
import {Dimensions, StatusBar,StyleSheet} from 'react-native';


ClassChatScreen.navigationOptions = screenProps => ({
    Title: "Chat"
});


export default function ClassChatScreen(props) {
    let [messages, setMessages] = useState(mockMessages.sort((a, b) => a.createdAt < b.createdAt));
    return (
        <KeyboardAvoidingView  behavior="padding" style={styles.containerContent}>
            <GiftedChat
                messages={messages}
                onSend={newMessages => onSend(newMessages)}
                user={{
                    _id: 1,
                }
                }
                forceGetKeyboardHeight
            />
        </KeyboardAvoidingView>
    );

    function onSend(newMessages = []) {
        setMessages(([...messages, ...newMessages].sort((a, b) => a.createdAt < b.createdAt)))
    }


}
const mockMessages =
    [
        {
            _id: 3,
            text: 'My message',
            createdAt: new Date(Date.UTC(2018, 5, 11, 17, 20, 0)),
            user: {
                _id: 2,
                name: 'React Native',
            }
            // You can also add a video prop:
            // Any additional custom parameters are passed through
        },
        {
            _id: 1,
            text: 'My message',
            createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
            user: {
                _id: 2,
                name: 'React Native',
            },
            // You can also add a video prop:
            // Any additional custom parameters are passed through
        },
        {
            _id: 2,
            text: 'My message',
            createdAt: new Date(Date.UTC(2017, 5, 11, 17, 20, 0)),
            user: {
                _id: 2,
                name: 'React Native',
            },
            // You can also add a video prop:
            // Any additional custom parameters are passed through
        }
    ];

const styles = StyleSheet.create({
    containerContent: {
        flex: 2,
        backgroundColor: 'white',
    }});