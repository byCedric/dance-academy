import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {Button, Image, Text, View} from "@shoutem/ui";

export default function NotificationsScreen(props) {
    return (
        <ScrollView style={styles.container}>

        </ScrollView>
    );
}

NotificationsScreen.navigationOptions = {
    title: 'Notificationes',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
