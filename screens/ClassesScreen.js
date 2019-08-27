import React, { useState } from "react";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { View, Text, Image, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

const ClassesScreen = (props) => {
    return (
        <ScrollView>
            {
                classes.map((u) => {
                    return (
                        <Card title="CARD WITH DIVIDER" key={u.id}>
                            <Text>{u.name}</Text>
                        </Card>
                    );
                })
            }
        </ScrollView>
        )
}




const classes =
    [{
        id: "1",
        name: "Bahata cero"
    },
    {
        id: "2",
        name: "Salsa cero"
    },
    {
        id: "3",
        name: "Kizomba uno"
    },
    {
        id: "4",
        name: "Bahata cero"
    },
    {
        id: "5",
        name: "Salsa cero"
    },
    {
        id: "6",
        name: "Kizomba uno"
    },{
        id: "7",
        name: "Bahata cero"
    },
    {
        id: "8",
        name: "Salsa cero"
    },
    {
        id: "9",
        name: "Kizomba uno"
    },{
        id: "10",
        name: "Bahata cero"
    },
    {
        id: "11",
        name: "Salsa cero"
    },
    {
        id: "12",
        name: "Kizomba uno"
    },
    ]


export default ClassesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});