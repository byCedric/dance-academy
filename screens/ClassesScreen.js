import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native'
import edwardirene from '../assets/images/gustavo-diana.png'
import * as queries from '../src/graphql/queries';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {ImageBackground, Title, View, Overlay, TouchableOpacity, Heading, Subtitle} from "@shoutem/ui"
import {images} from "../constants/Images";



export default function ClassesScreen(props) {
    let [danceClasses, setDanceClasses] = useState([]);
    useEffect(() => {
        async function fetchClasses() {
            let loggedUser = await Auth.currentUserInfo();
            let userInfo = await API.graphql(graphqlOperation(queries.getUser, {
                type: "USER",
                id: loggedUser.attributes.sub
            }));
            console.log(userInfo.data.getUser.classes);
            setDanceClasses([...userInfo.data.getUser.classes])
        }
        fetchClasses();
    }, []);

    const {navigate} = props.navigation;
    return <ScrollView>
        {
            danceClasses.map((danceClass) => {
                return (
                    <TouchableOpacity
                        key={danceClass.id}
                        onPress={() => navigate('ClassDetail', {"class": danceClass})}
                    >
                        <ImageBackground
                            styleName="large-banner"
                            source={images[danceClass.picture].uri}
                            key={danceClass.id}
                            imageStyle={{opacity: 0.6, backgroundColor: 'rgba(255,0,0,.6)'}}
                            onclick

                        >
                            <Overlay styleName="fill-parent image-overlay">
                                <Heading>{(danceClass.name || '').toUpperCase()}</Heading>
                                <View styleName="vertical" virtual>
                                    <Title
                                        styleName="collapsible"
                                        numberOfLines={1}>
                                        {danceClass.instructors}
                                    </Title>
                                    <Subtitle>{danceClass.dayOfWeek} {danceClass.hourOfDay}</Subtitle>
                                </View>
                            </Overlay>
                        </ImageBackground>
                    </TouchableOpacity>
                );
            })
        }
    </ScrollView>
};
ClassesScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    classTitle: {
        fontSize: 24
    }
});
