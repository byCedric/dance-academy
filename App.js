import React, { useState } from 'react';
import Amplify, { Hub } from 'aws-amplify';
import awsconfig from './aws-exports';import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react-native';

import AppNavigator from './navigation/AppNavigator';
import { I18n } from 'aws-amplify';
import CustomSignIn from './components/CustomSignIn';


Amplify.configure(awsconfig);

const dict = {
  'es': {
      'Sign In': "Iniciar sesión",
      'Sign Up': "Regístrate",
      'Enter your username' : "Introduce tu usuaio",
      'Invalid email adress format.' : "Formato de correo inválido."
  }
};

I18n.putVocabularies(dict);

I18n.setLanguage('es');


class App extends React.Component {
  constructor(props) {
    super(props);
  };

componentDidMount() {
    Hub.listen('auth', (authData) => {
      console.log('authData: ', authData)
      if (authData.payload.event === 'signOut') {
        this.props.onStateChange('signedOut', null);
      }
    })
  }

render() {
    return (
        <AppNavigator ></AppNavigator>
    );
  }
}
export default withAuthenticator(App, false, [
  <CustomSignIn/>,
  <RequireNewPassword />
]);