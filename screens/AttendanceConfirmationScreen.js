import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from "react-native";
import {
    Caption, Icon,
    ImageBackground, Overlay, Row, Text,
    ScrollView, Title, TouchableOpacity, View,
} from "@shoutem/ui"
import {DataTable, Badge} from 'react-native-paper';
import {API, Auth, graphqlOperation} from "aws-amplify";
import * as queries from "../src/graphql/queries";
import * as subscriptions from "../src/graphql/subscriptions";

import * as mutations from "../src/graphql/mutations";


export default function AttendanceConfirmationScreen(props) {
    let {navigate} = props.navigation;
    const classId = props.navigation.getParam('class_id');
    const userInfo = props.navigation.getParam('userInfo');
    const [loading, setLoading] = useState(true);

    const [boysList, setBoysList] = useState([]);
    const [girlsList, setGirlsList] = useState([]);
    console.log(userInfo);

    useEffect( () => {
        async function fetchAttendanceData() {
                const result = await API.graphql(graphqlOperation(queries.getClass, {
                    class_id: classId
                }));
                console.log(result);

                setBoysList(result.data.getClass.attendance.filter(attendance => attendance.role === 'BOY'));
                setGirlsList(result.data.getClass.attendance.filter(attendance => attendance.role === 'GIRL'));
                console.log(boysList)
            }
            fetchAttendanceData()
                .then(() => setLoading(false))
        }, []
    )
    ;

    useEffect(() => {
        const subscription = API.graphql(graphqlOperation(subscriptions.onAttendanceCreated, {
            class_id: classId
        }))
            .subscribe(
                {
                    next: (attendanceConfirmation) => {
                        console.log("Received an event: " + attendanceConfirmation);
                        if (attendanceConfirmation.role === 'BOY') {
                            boysList.push(attendanceConfirmation.value)
                        } else {
                            girlsList.push(attendanceConfirmation.value)
                        }
                    }
                }
            );
        return () => subscription.unsubscribe();
    }, []);


    return (
        <View>
            <ScrollView>
                {loading && (
                    <ActivityIndicator
                        style={{ height: 80 }}
                        color="#FF0000"
                        size="large"
                    />
                )}
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <DataTable style={{width: "49%"}}>
                        <DataTable.Header>
                            <DataTable.Title>
                                {boysList.length} Chicos
                            </DataTable.Title>
                        </DataTable.Header>
                        {
                            boysList.map((confirmation) => {
                                return (
                                    <DataTable.Row key={confirmation.id}>
                                        <DataTable.Cell>{confirmation.name}</DataTable.Cell>
                                    </DataTable.Row>
                                );
                            })
                        }
                    </DataTable>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>{girlsList.length} Chicas</DataTable.Title>
                        </DataTable.Header>
                        {
                            girlsList.map((confirmation) => {
                                return (
                                    <DataTable.Row key={confirmation.id}>
                                        <DataTable.Cell>{confirmation.name}</DataTable.Cell>
                                    </DataTable.Row>
                                );
                            })
                        }
                    </DataTable>
                </View>
            </ScrollView>
            <Row>
                <Text>Asistirás a clase?</Text>
                <TouchableOpacity>
                    <Icon name="checkbox-on"
                          onPress={
                              () => createAttendance()
                          }
                    >
                    </Icon>

                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="close">
                    </Icon>
                </TouchableOpacity>

            </Row>
        </View>
    );

    async function createAttendance() {
        console.log("confirming attendance with role : " + userInfo.role);

        let userAttendance = {
            class_id: classId,
            id: userInfo.id,
            name: userInfo.name,
            role: userInfo.role
        };
        if (userInfo.role === 'BOY') {
            if (boysList.filter(e => e.id === userInfo.id).length < 1) {
                setLoading(true);
                setBoysList([...boysList, userAttendance]);
            } else {
                return
            }
        } else {
            if (girlsList.filter(e => e.id === userInfo.id).length <  1) {
                setLoading(true);
                setBoysList([...girlsList, userAttendance]);
            } else {
                return
            }
        }
        console.log("pushed to local state");


        const newAttendance = API.graphql(graphqlOperation(mutations.createAttendance, {
            input: {
                ...userAttendance
            }
        }));
        console.log("pushed to the server");
        setLoading(false)
    }
    async function deleteOwnAttendance() {

        let userAttendance = {
            class_id: classId,
            id: userInfo.id,
            name: userInfo.name,
            role: userInfo.role
        };
        if (userInfo.role === 'BOY') {
            if (boysList.filter(e => e.id === userInfo.id).length < 1) {
                setLoading(true);
                setBoysList([...boysList, userAttendance]);
            } else {
                return
            }
        } else {
            if (girlsList.filter(e => e.id === userInfo.id).length <  1) {
                setLoading(true);
                setBoysList([...girlsList, userAttendance]);
            } else {
                return
            }
        }
        console.log("pushed to local state");


        const newAttendance = API.graphql(graphqlOperation(mutations.createAttendance, {
            input: {
                ...userAttendance
            }
        }));
        console.log("pushed to the server");
        setLoading(false)
    }
}