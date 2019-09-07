import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Auth } from 'aws-amplify';
import {Button, View } from 'react-native';

export default function ProfileScreen(props) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return( <View><Button onPress={() => Auth.signOut()} title='Cerrar sessión'/></View>)
}


ProfileScreen.navigationOptions = {
  title: 'Mi perfil',
};
