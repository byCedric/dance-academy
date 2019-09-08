import React from 'react';
import Amplify, {Hub, Auth, API} from 'aws-amplify';
import awsconfig from './aws-exports';
import {
    RequireNewPassword,
    withAuthenticator
} from 'aws-amplify-react-native';
import AppNavigator from './navigation/AppNavigator';
import {I18n} from 'aws-amplify';
import CustomSignIn from './components/CustomSignIn';
import {AppLoading} from "expo";
import * as Font from "expo-font";


Amplify.configure(awsconfig);

Amplify.configure({
    API: {
        graphql_headers: async () => {
            const currentSession = await Auth.currentSession();
            return {Authorization: currentSession.getIdToken().getJwtToken()};
        }
    }
});

const dict = {
    'es': {
        'Sign In': "Iniciar sesión",
        'Sign Up': "Regístrate",
        'Enter your username': "Introduce tu usuario",
        'Invalid email adress format.': "Formato de correo inválido."
    }
};

I18n.putVocabularies(dict);

I18n.setLanguage('es');

class App extends React.Component {
    state = {
        fontsAreLoaded: false,
    };

    componentDidMount() {
        Hub.listen('auth', (authData) => {
            if (authData.payload.event === 'signOut') {
                this.props.onStateChange('signedOut', null);
            }
        });

    }

    async componentWillMount() {
        await Font.loadAsync({
            'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
            'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
            'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
            'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
            'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
            'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
            'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
            'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
            'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
            'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
        });

        this.setState({ fontsAreLoaded: true });
    }

    render() {
        if (!this.state.fontsAreLoaded) {
            return <AppLoading/>;
        }
        return (
          <AppNavigator navigation={this.props.navigation}/>
        );
    }
}

export default withAuthenticator(App, false, [
    <CustomSignIn/>,
    <RequireNewPassword/>
]);
