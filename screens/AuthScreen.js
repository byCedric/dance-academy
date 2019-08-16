import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { Auth } from 'aws-amplify';

handleSignUp = () => {
    alert(JSON.stringify(this.state));
}

async function handleSignIn(username, password) {
    const user = await Auth.signIn(username, password)
    console.log(JSON.stringify(user))
    if(user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        //TODO: manage and ask for a new password 
        const loggedUser = await Auth.completeNewPassword(user, "012345")
        .then(user => alert(JSON.stringify(user)))
    }
  }

export default class AuthenticationScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Bienvenido a luna salcedo!</Text>
        <Input
          label="Correo electrónico"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          shake={true}
          placeholder="María@email.com"
          onChangeText={
            (value) => this.setState({ username: value })
          }
        />
        <Input
          label="Contraseña"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={
            (value) => this.setState({ password: value })
          }
          placeholder="p@ssw0rd123"
          secureTextEntry
        />
        <Button
          title='Iniciar sesión'
          onPress={ () => handleSignIn(this.state.username, this.state.password) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});