/*s importar createStackNavigator para implementar a navegação de
login. Importaremos também as telas LoginScreen e Register*/

import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/Register";

import DrawerNavigator from "./navigation/DrawerNavigator";

/*Estamos importando o banco de dados do Firebase e a nossa configuração em App.js.
Então vamos inicializar o aplicativo com eles. Temos a condição if-else para verificar se
o aplicativo Firebase já está inicializado. Se não, inicializamos o aplicativo Firebase;
caso contrário, usamos o aplicativo já inicializado.*/

import * as firebase from "firebase";
import { firebaseConfig } from "./config";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

/* adicionar o Stack Navigator, que irá conter nossas telas.*/

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Login"  screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="Dashboard" component={DrawerNavigator} />
  </Stack.Navigator>)
}

export default function App() {
  return (

/*é importante ter a nossa navegação no componente
<NavigationContainer>*/

    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>)

}