import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {

/*na função componentDidMount(), usaremos firebase.auth().signOut(), que desconectará o usuário do nosso
aplicativo Firebase, portanto, o usuário não poderá acessar o aplicativo, será desconectado
diretamente e levado para a tela de login.*/

  componentDidMount() {
    firebase.auth().signOut();

/* Vamos redirecionar para a tela de login após o logout.*/
    this.props.navigation.replace("Login");
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});