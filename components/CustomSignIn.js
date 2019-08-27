
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { I18n } from 'aws-amplify';
import { AmplifyButton, FormField, ErrorRow } from '../AmplifyUI';
import { SignIn } from 'aws-amplify-react-native';

export default class CustomSignIn extends SignIn {
    constructor(props) {
        super(props);
    }

    showComponent(theme) {
        return React.createElement(
            TouchableWithoutFeedback,
            { onPress: Keyboard.dismiss, accessible: false },
            React.createElement(
                View,
                { style: theme.section },
                React.createElement(
                    View,
                    { style: theme.sectionBody },
                    this.renderUsernameField(theme),
                    React.createElement(FormField, {
                        theme: theme,
                        onChangeText: text => this.setState({ password: text }),
                        label: I18n.get('Password'),
                        placeholder: I18n.get('Enter your password'),
                        secureTextEntry: true,
                        required: true
                    }),
                    React.createElement(AmplifyButton, {
                        text: I18n.get('Sign In').toUpperCase(),
                        theme: theme,
                        onPress: this.signIn,
                        disabled: !this.getUsernameFromInput() && this.state.password
                    })
                ),
                React.createElement(
                    ErrorRow,
                    { theme: theme },
                    this.state.error
                )
            )
        );
    }
}