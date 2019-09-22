import React, {useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import {KeyboardAvoidingView, Platform, StatusBar, StyleSheet} from 'react-native';
import {Header} from 'react-navigation';
import {Auth} from "aws-amplify";
import {AppLoading} from "expo";


export default function ClassChatScreen(props) {
    let [userId, setUserId] = useState("");
    let [username, setUsername] = useState("");
    let [messages, setMessages] = useState([]);
    loadCurrentUserInfo()
        .catch(err => console.log(err));
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={"padding"}
                              keyboardVerticalOffset={Header.HEIGHT + StatusBar.currentHeight}
                              enabled={Platform.OS === 'android'}>
            <GiftedChat
                messages={messages}
                onSend={newMessages => onSend(newMessages)}
                user=
                    {{
                        _id: userId,
                        name: username
                    }}
                inverted={false}
            />
        </KeyboardAvoidingView>
    );

    function onSend(newMessages = []) {
        console.log(...newMessages);
        setMessages(([...messages, ...newMessages]))
    }
    async function loadCurrentUserInfo() {
        let currentUserInfo = await Auth.currentUserInfo();
        setUserId(currentUserInfo.attributes.sub);
        setUsername(currentUserInfo.username);
    }


}


const getUserInfo = async () => {
    await Auth.currentUserInfo();
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});