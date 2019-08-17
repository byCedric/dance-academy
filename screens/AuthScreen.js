import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { Auth } from 'aws-amplify';

handleSignUp = () => {
    alert(JSON.stringify(this.state));
}

async function handleSignIn(username, password) {
    try {
        const user = await Auth.signIn(username, password)
    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        //TODO: manage and ask for a new password 
        Auth.completeNewPassword(user, "012345")
            .then(user => alert(JSON.stringify(user)))
    }
    } catch (err) {
        if (err.code === 'NotAuthorizedException' || err.code === 'UserNotFoundException') {
            alert("Usuario ó contraseña inválidos")
        }
        throw Error()
    }
}

const AuthenticationScreen = (props) => {
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')

     const signIn = () => {
        handleSignIn(username, password).then(success => props.navigation.navigate('Home'));
    }

     return (
        <View style={styles.container}>
            <Text>Bienvenido a luna salcedo!</Text>
            <Input
                label="Correo electrónico"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                shake={true}
                placeholder="María@mail.com"
                onChangeText={
                    (value) => setUsername(value)
                }
            />
            <Input
                label="Contraseña"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={
                    (value) => setPassword(value)
                }
                placeholder="p@ssw0rd123"
                secureTextEntry
            />
            <Button
                title='Iniciar sesión'
                onPress={signIn}
            />
        </View>
    );
}

export default AuthenticationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});