import React, {useState, useEffect} from 'react';
import {
    Caption, Icon,
    ImageBackground, Overlay, Row, Text,
    ScrollView, Title, TouchableOpacity, View, Image, Subtitle
} from "@shoutem/ui"

ClassVideosScreen.navigationOptions = {
    title: 'Vídeos',
};


export default function ClassVideosScreen(props) {
    let {navigate} = props.navigation;
    const classId = props.navigation.getParam('class_id');
    const userInfo = props.navigation.getParam('userInfo');
    const [loading, setLoading] = useState(true);
    return (
        <ScrollView>
            {
                mockData.map((video) => {
                        return <Row key={video.id}>
                            <Image
                                styleName="small rounded-corners"
                                source={{uri: video.thumbnail}}
                            />
                            <View styleName="vertical stretch space-between">
                                <Subtitle>{video.title}</Subtitle>
                                <Caption>{video.duration}</Caption>
                            </View>
                        </Row>
                    }
                )

            }

        </ScrollView>
    );
}
const mockData = [
    {
        id : "1",
        thumbnail: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png",
        title: "Salsa 1 Joaquín 28/08/2019",
        duration: "1:30"

    },
    {
        id : "2",
        thumbnail: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png",
        title: "Salsa 1 Joaquín 21/08/2019",
        duration: "1:30"

    },
    {
        id : "3",
        thumbnail: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png",
        title: "Salsa 1 Joaquín 14/08/2019",
        duration: "1:30"

    },

];