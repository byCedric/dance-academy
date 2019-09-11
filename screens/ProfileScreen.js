import React from 'react';
import { Auth } from 'aws-amplify';
import {Button, View } from 'react-native';

export default function ProfileScreen(props) {
  return( <View><Button onPress={() => Auth.signOut()} title='Cerrar sessión'/></View>)
}