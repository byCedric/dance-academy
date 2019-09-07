import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

export default function NotificationsScreen() {
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
