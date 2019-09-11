import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ClassesScreen from '../screens/ClassesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ClassDetailScreen from "../screens/ClassDetailScreen";
import AttendanceConfirmationScreen from "../screens/AttendanceConfirmationScreen";
import ClassChatScreen from "../screens/ClassChatScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    header: null,
    default: {},
    activeTintColor: '#000',
    inactiveTintColor: '#fff'
});

const HomeStack = createStackNavigator(
    {
        Classes: {
            screen: ClassesScreen,
            navigationOptions: {

            }
        },
        ClassDetail: {
            screen: ClassDetailScreen,
            navigationOptions: {
                headerBackTitle: 'Atrás',
                headerTitleStyle: {
                    fontFamily: "Rubik-Regular",
                    marginLeft: -5
                },
            }
        },
        ClassChat: {
            screen: ClassChatScreen,
            navigationOptions: {
                title: 'Chat',
                headerBackTitle: 'Atrás',
                headerTitleStyle: {
                    fontFamily: "Rubik-Regular",
                    marginLeft: -5
                },
            }
        },
        AttendanceConfirmation: {
            screen: AttendanceConfirmationScreen,
            navigationOptions: {
                headerBackTitle: 'Atrás',
                headerTitleStyle: {
                    fontFamily: "Rubik-Regular",
                    marginLeft: -5
                },
            }
        }
    },
    config
);

HomeStack.navigationOptions = ({navigation}) => {
    let {routeName} = navigation.state.routes[navigation.state.index];
    let navigationOptions = {
        tabBarLabel : 'Clases',
        tabBarIcon: ({focused}) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios'
                        ? `ios-calendar${focused ? '' : '-outline'}`
                        : 'md-calendar'
                }
            />
        )
    };
    if (routeName === 'ClassChat') {
        navigationOptions.tabBarVisible = false;
    }
    return navigationOptions
};


HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: NotificationsScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Notificaciones',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}/>
    ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: ProfileScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Mi perfil',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}/>
    ),
    activeTintColor: '#000',
    inactiveTintColor: '#fff'
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
