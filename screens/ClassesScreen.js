import React from "react";
import {ScrollView, StyleSheet} from 'react-native'
import edwardirene from '../assets/images/edward-irene.png'
import * as queries from '../src/graphql/queries';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {ImageBackground, Title, Caption, View, Overlay, TouchableOpacity} from "@shoutem/ui"


const getClasses = async () => {
        await Auth.currentUserInfo()
            .then(user => console.log(API.graphql(graphqlOperation(queries.getUsers, {id: user.attributes.sub}))))
            .then(success => console.log(success));


    },
    ClassesScreen = (props) => {
        const {navigate} = props.navigation;
        getClasses().then(r => console.log("rendering " + JSON.stringify(r)));
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
                                    <Title styleName="md-gutter-bottom">{(danceClass.name || '').toUpperCase()}</Title>
                                    <View styleName="horizontal md-gutter-top" virtual>
                                        <Caption
                                            styleName="collapsible"
                                            numberOfLines={1}>
                                            {danceClass.instructors}
                                        </Caption>
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
    [{
        id: "1",
        name: "Bachata Tres",
        instructors: "Joaquín y Bea"
    },
        {
            id: "2",
            name: "Salsa cero",
            instructors: "Edward e Irene"
        },
        {
            id: "3",
            name: "Kizomba uno",
            instructors: "Joaquín y Bea"
        },
        {
            id: "4",
            name: "Bachata cero",
            instructors: "Edward e Irene"
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
    }
});