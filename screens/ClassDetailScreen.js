import React from 'react';

import edwardirene from '../assets/images/edward-irene.png'
import {
    View,
    Row,
    Image,
    Icon,
    Text,
    TouchableOpacity
} from "@shoutem/ui"
import {NotImplementedYet} from "../components/NotImplementedYet";


ClassDetailScreen.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam("class").name
});

export default function ClassDetailScreen(props) {

    const {navigation} = props;
    const danceClass = navigation.getParam('class');
    return (

        <View>
            <Image styleName="large-banner" source={edwardirene}>
            </Image>
            <TouchableOpacity
                onPress={NotImplementedYet()}
            >
                <Row>
                    <Icon name="add-friend"/>
                    <View styleName="vertical">
                        <Text>
                            Confirmar asistencia
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
                        <Text>
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
                        <Text>
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
                        <Text>
                            Personas inscritas
                        </Text>
                    </View>
                    <Icon styleName="disclosure" name="right-arrow"/>
                </Row>
            </TouchableOpacity>
        </View>


    )
}

