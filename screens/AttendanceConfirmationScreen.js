import React from 'react';

import edwardirene from '../assets/images/edward-irene.png'
import {
    Caption,
    ImageBackground, Overlay,
    ScrollView, Title, TouchableOpacity, View,
} from "@shoutem/ui"
import { DataTable, Badge } from 'react-native-paper';


export default function AttendanceConfirmationScreen(props) {
    let { navigate } = props.navigation;

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <DataTable style={{ width: "49%" }}>
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
                <DataTable >
                    <DataTable.Header>
                        <DataTable.Title>{girlList.length} Chicas</DataTable.Title>
                    </DataTable.Header>
                    {
                        girlList.map((confirmation) => {
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
    )
}



const attendanceList =
    [
        {
            "person_id": "c857b91c-2e60-4903-8ba6-8a9ecf12a1f0",
            "name": "Sergio Majanto",
            "role": "BOY"
        },
        {
            "person_id": "51bdb997-ea6d-4cd2-b8db-d0f668ff1a5f",
            "name": "Sandra",
            "role": "GIRL"
        },
        {
            "person_id": "a9468546-d740-4e5a-a39b-8032f8b2bb77",
            "name": "Rubén",
            "role": "BOY"
        },
        {
            "person_id": "e79752c4-7817-4055-842b-933258f0f606",
            "name": "Martita",
            "role": "BOY"
        },
        {
            "person_id": "41c63526-04a4-4d24-ace8-7815f2b6ab90",
            "name": "Joaquín",
            "role": "BOY"
        },
        {
            "person_id": "e179abf2-e5a9-49e4-9797-7f5cce9c9275",
            "name": "Bea",
            "role": "GIRL"
        },
        {
            "person_id": "1cab7597-8916-401d-9e5c-058e8409472f",
            "name": "Marta",
            "role": "GIRL"
        }
    ]

const boysList = attendanceList.filter((b) => b.role === "BOY")

const girlList = attendanceList.filter((b) => b.role === "GIRL")