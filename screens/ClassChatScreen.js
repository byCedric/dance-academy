import React, {useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import {KeyboardAvoidingView, View, Platform, ScrollView} from 'react-native';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';


export default class ClassChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Chat',
    });

    state = {
        messages: [],
    };

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexGrow: 1,
        justifyContent: 'center',
        height: Dimensions.get("window").height - StatusBar.currentHeight
    }
});
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