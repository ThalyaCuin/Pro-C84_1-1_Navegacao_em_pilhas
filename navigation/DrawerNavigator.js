/*adicionarmos agora Stack Navigator no DrawerNavigator, ainda
veremos o TabNavigator por padrão e teremos a capacidade de alternar para nossa
StoryScreen.*/

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

/*adicionaremos o arquivo Logout.js */

import Logout from "../screens/Logout";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (

/*adicionamos um novo componente <Drawer.Screen> para incluir o texto de Logout do arquivo Logout.js.*/

    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Tela Inicial" component={StackNavigator} />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;