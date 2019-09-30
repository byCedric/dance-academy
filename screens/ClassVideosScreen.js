import React, {useState, useEffect} from 'react';
import {YoutubeDataAPI} from "youtube-v3-api";
import {ActivityIndicator, Linking} from 'react-native';
import {
    Caption, Icon,
    ImageBackground, Overlay, Row, Text,
    ScrollView, Title, TouchableOpacity, View, Image, Subtitle, Button
} from "@shoutem/ui"
import {API, Auth, graphqlOperation} from "aws-amplify";
import * as queries from "../src/graphql/queries";
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

ClassVideosScreen.navigationOptions = {
    title: 'Vídeos',
};

Permissions.askAsync(Permissions.CAMERA_ROLL);

export default function ClassVideosScreen(props) {
    let {navigate} = props.navigation;
    let playlistId = "PLa4kAVTZc-eOgyv9iBdMqKPJN6Ya7vq_Z";
    const classId = props.navigation.getParam('class_id');
    const userInfo = props.navigation.getParam('userInfo');
    const [loading, setLoading] = useState(true);
    let [videos, setVideos] = useState([]);
    const API_KEY = "AIzaSyCMohgYv9KGjixK-4_oEvr2jeU98vrmZC8";
    const api = new YoutubeDataAPI(API_KEY);


    useEffect(() => {
        async function fetchVideos() {
            let videos = await api.searchPlaylistItems(playlistId, 50, {part: "snippet,contentDetails"});
            console.log(JSON.stringify(videos.items));
            setVideos([...videos.items]);
            setLoading(false);
        }

        fetchVideos()
            .catch(() => console.log("Something went wrong while fetching videos!"));
    }, []);


    return (
        <ScrollView>
            {loading && (
                <ActivityIndicator
                    style={{height: 80}}
                    color="#FF0000"
                    size="large"
                />
            )}

            {videos.map((video) => {
                    return <TouchableOpacity key={video.id}
                                             onPress={() => Linking.openURL("https://www.youtube.com/watch?v=" + video.snippet.resourceId.videoId)}>
                        <Row>
                            <Image
                                styleName="small rounded-corners"
                                source={{uri: video.snippet.thumbnails.default.url}}
                            />
                            <View styleName="vertical stretch space-between">
                                <Subtitle>{video.snippet.title}</Subtitle>
                            </View>
                        </Row>
                    </TouchableOpacity>

                }
            )
            }


            <Button
                onPress={async () => {
                    let file = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Videos
                        }
                    )
                }
                }
            >
                <Text>Subir vídeo</Text>
            </Button>


        </ScrollView>
    );
}
