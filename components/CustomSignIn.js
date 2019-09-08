import React from 'react';
import {View, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import {I18n} from 'aws-amplify';
import {AmplifyButton, FormField, ErrorRow} from 'aws-amplify-react-native';
import {SignIn} from 'aws-amplify-react-native';

export default class CustomSignIn extends SignIn {
    constructor(props) {
        super(props);
    }

    showComponent(theme) {
        return (
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
            >
                <View style={[theme.section, styles.container]}>
                    <View style={theme.sectionBody}>
                        {this.renderUsernameField(theme)}
                        <FormField
                            theme={theme}
                            onChangeText={text => this.setState({password: text})}
                            label={I18n.get('Password')}
                            placeholder={I18n.get('Enter your password')}
                            secureTextEntry={true}
                            required={true}
                        />
                        <AmplifyButton
                            text={I18n.get('Sign In').toUpperCase()}
                            theme={theme}
                            onPress={this.signIn}
                            disabled={!this.getUsernameFromInput() && this.state.password}

                        />
                    </View>
                    <ErrorRow
                        theme={theme}
                    >
                        {this.state.error}
                    </ErrorRow>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    },
});
