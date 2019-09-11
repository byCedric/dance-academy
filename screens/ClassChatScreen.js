import React, {useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import {KeyboardAvoidingView, StatusBar, StyleSheet, Platform, View} from 'react-native';
import {Header} from 'react-navigation';

export default function ClassChatScreen(props) {
    let [messages, setMessages] = useState([]);
    return (
                <KeyboardAvoidingView style={{flex: 1}} behavior={"padding"}
                                      keyboardVerticalOffset={Header.HEIGHT + StatusBar.currentHeight} enabled={Platform.OS === 'android'} >
                    <GiftedChat
                        messages={messages}
                        onSend={newMessages => onSend(newMessages)}
                        user=
                            {{
                                _id: 1,
                            }}
                        inverted={false}
                    />
                </KeyboardAvoidingView>
    );

    function onSend(newMessages = []) {
        setMessages(([...messages, ...newMessages]))
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});