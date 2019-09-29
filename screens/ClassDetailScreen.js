import React from 'react';
import {StyleSheet} from "react-native";
import {
    View,
    Row,
    Image,
    Icon,
    Text,
    TouchableOpacity
} from "@shoutem/ui"

import {NotImplementedYet} from "../components/NotImplementedYet";
import {images} from "../constants/Images";


ClassDetailScreen.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam("class").name
});

export default function ClassDetailScreen(props) {

    const {navigate} = props.navigation;
    const danceClass = props.navigation.getParam('class');
    const userInfo = props.navigation.getParam('userInfo');
    return (
            <View>
            <Image styleName="large-banner" source={images[danceClass.picture].uri} />
            <TouchableOpacity
                onPress={() => navigate('AttendanceConfirmation', {"class_id" : danceClass.id, "userInfo" : userInfo})}
            >
                <Row>
                    <Icon name="add-friend" />
                    <View styleName="vertical">
                        <Text style={styles.text}>
                            Confirmar asistencia
                        </Text>
                    </View>
                    <Icon styleName="disclosure" name="right-arrow"/>
                </Row>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('ClassChat', {"class": danceClass})}
            >
                <Row>
                    <Icon name="activity" />
                    <View styleName="vertical">
                        <Text style={styles.text}>
                            Chat
                        </Text>
                    </View>
                    <Icon styleName="disclosure" name="right-arrow"/>
                </Row>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigate('ClassVideos', {"class": danceClass})}
            >
                <Row>
                    <Icon name="music-video"/>

                    <View styleName="vertical">
                        <Text style={styles.text}>
                            Vídeos
                        </Text>
                    </View>
                    <Icon styleName="disclosure" name="right-arrow"/>
                </Row>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={NotImplementedYet()}
            >
                <Row>
                    <Icon name="podcasts"/>
                    <View styleName="vertical">
                        <Text style={styles.text}>
                            Playlists
                        </Text>
                    </View>
                    <Icon styleName="disclosure" name="right-arrow"/>
                </Row>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={NotImplementedYet()}
            >
                <Row>
                    <Icon name="users"/>
                    <View styleName="vertical">
                        <Text style={styles.text}>
                            Personas inscritas
                        </Text>
                    </View>
                    <Icon styleName="disclosure" name="right-arrow"/>
                </Row>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    },
});

