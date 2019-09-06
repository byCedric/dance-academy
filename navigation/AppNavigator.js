import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ClassDetailScreen from "../screens/ClassDetailScreen";

export default createAppContainer(
    createSwitchNavigator({
        Main: MainTabNavigator,
    })
);
