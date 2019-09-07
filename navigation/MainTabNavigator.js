import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ClassesScreen from '../screens/ClassesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ClassDetailScreen from "../screens/ClassDetailScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    header: null,
    default: {},
    activeTintColor: '#000',
    inactiveTintColor: '#fff'
});

const HomeStack = createStackNavigator(
    {
        Classes: ClassesScreen,
        ClassDetail: {screen: ClassDetailScreen}
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Clases',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-calendar${focused ? '' : '-outline'}`
                    : 'md-calendar'
            }
        />
    ),
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
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}/>
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
