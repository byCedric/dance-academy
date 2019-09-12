import React from "react";
import {ScrollView, StyleSheet} from 'react-native'
import edwardirene from '../assets/images/gustavo-diana.png'
import * as queries from '../src/graphql/queries';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {ImageBackground, Title, View, Overlay, TouchableOpacity, Heading, Subtitle} from "@shoutem/ui"


const getClasses = async () => {
        await Auth.currentUserInfo()
            .then(user => API.graphql(graphqlOperation(queries.getUsers, {id: user.attributes.sub})))
    },
    ClassesScreen = (props) => {
    getClasses();
        const {navigate} = props.navigation;
        return <ScrollView>
            {
                classes.map((danceClass) => {
                    return (
                        <TouchableOpacity
                            key={danceClass.id}
                            onPress={() => navigate('ClassDetail', {"class": danceClass})}
                        >
                            <ImageBackground
                                styleName="large-banner"
                                source={edwardirene}
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

export default ClassesScreen

const classes =
    [
        {
            id: "1",
            name: "Bachata Uno",
            instructors: "Joaquín y Bea",
            dayOfWeek: "LUNES",
            hourOfDay: "21:00"
        },
        {
            id: "2",
            name: "Salsa Uno",
            instructors: "Edward e Irene",
            dayOfWeek: "VIERNES",
            hourOfDay: "21:00"
        },
        {
            id: "3",
            name: "Salsa Línea 0 Av.",
            instructors: "Gustavo y Diana",
            dayOfWeek: "MARTES",
            hourOfDay: "20:00"
        },
        {
            id: "4",
            name: "Salsa Uno",
            instructors: "Joaquín y Pilar",
            dayOfWeek: "VIERNES",
            hourOfDay: "22:00"
        },
        {
            id: "5",
            name: "Salsa cero",
            instructors: "Joaquín y Bea"
        },
        {
            id: "6",
            name: "Kizomba uno",
            instructors: "Joaquín y Bea"
        },
        {
            id: "7",
            name: "Bachata cero",
            instructors: "Edward e Irene"
        },
        {
            id: "8",
            name: "Salsa cero",
            instructors: "Joaquín y Bea"
        },
        {
            id: "9",
            name: "Kizomba uno",
            instructors: "Edward e Irene"
        },
        {
            id: "10",
            name: "Bachata cero",
            instructors: "Joaquín y Bea"
        },
        {
            id: "11",
            name: "Salsa cero",
            instructors: "Joaquín y Bea"
        },
        {
            id: "12",
            name: "Kizomba uno",
            instructors: "Edward e Irene"
        },
    ];


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
