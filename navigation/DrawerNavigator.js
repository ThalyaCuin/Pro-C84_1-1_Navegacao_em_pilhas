/*adicionarmos agora Stack Navigator no DrawerNavigator, ainda
veremos o TabNavigator por padrão e teremos a capacidade de alternar para nossa
StoryScreen.*/

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

/*adicionaremos o arquivo Logout.js */

import Logout from "../screens/Logout";

/*Nós adicionamos um atributo options (opções) aos componentes <Tab.Screen> e
<Drawer.Screen>.
Este atributo options está disponível para todos os componentes de tela do tipo de
navegação. Nele, usamos um atributo específico unmountOnBlur e o configuramos como
true para todas as telas. Este é o tipo de opção de tela mais usado, que desmonta a tela
assim que o usuário a deixa.*/

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Tela Inicial"
        component={StackNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;