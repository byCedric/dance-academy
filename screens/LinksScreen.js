import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {Button, Image, Text, View} from "@shoutem/ui";

export default function LinksScreen(props) {
    return (
        <ScrollView style={styles.container}>
            {/**
             * Go ahead and delete ExpoLinksView and replace it with your content;
             * we just wanted to provide you with some helpful links.
             */}
            <Button onPress={() => props.navigation.goBack(null)}>
                <Text>
                    Back!
                </Text>
            </Button>
        </ScrollView>
    );
}

LinksScreen.navigationOptions = {
    title: 'Links',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
