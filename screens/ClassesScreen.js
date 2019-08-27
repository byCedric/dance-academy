import React from "react";
import {Card } from "react-native-paper"
import { ScrollView, StyleSheet} from 'react-native'
import edwardirene  from '../assets/images/edward-irene.png'

const ClassesScreen = (props) => {
    return (
        <ScrollView>
            {
                classes.map((u) => {
                    return (
                        <Card key={u.id}>
                            <Card.Title title={u.name}/>
                            <Card.Cover source={edwardirene}/>
                        </Card>
                    );
                })
            }
        </ScrollView>
        )
}

ClassesScreen.navigationOptions = {
    title: 'Tus clases',
};

export default ClassesScreen




const classes =
    [{
        id: "1",
        name: "Bahata lala"
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



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});