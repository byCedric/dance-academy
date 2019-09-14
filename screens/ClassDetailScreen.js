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

import edwardirene from '../assets/images/edward-irene.png'
import {NotImplementedYet} from "../components/NotImplementedYet";
import {images} from "../constants/Images";


ClassDetailScreen.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam("class").name
});

export default function ClassDetailScreen(props) {

    const {navigate} = props.navigation;
    const danceClass = props.navigation.getParam('class');
    return (

        <View>
            <Image styleName="large-banner" source={images[danceClass.picture].uri} />
            <TouchableOpacity
                onPress={() => navigate('AttendanceConfirmation', danceClass.id)}
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
                onPress={() => navigate('ClassChat')}
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
                onPress={NotImplementedYet()}
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

