/*adicionarmos agora Stack Navigator no DrawerNavigator, ainda
veremos o TabNavigator por padrão e teremos a capacidade de alternar para nossa
StoryScreen.*/

import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

/*adicionaremos o arquivo Logout.js */

import Logout from "../screens/Logout";

//o importaremos o firebase
import firebase from "firebase";

//e importar CustomSidebarMenu (menu lateral personalizado),

import CustomSidebarMenu from "../screens/CustomSidebarMenu";

/*Nós adicionamos um atributo options (opções) aos componentes <Tab.Screen> e
<Drawer.Screen>.
Este atributo options está disponível para todos os componentes de tela do tipo de
navegação. Nele, usamos um atributo específico unmountOnBlur e o configuramos como
true para todas as telas. Este é o tipo de opção de tela mais usado, que desmonta a tela
assim que o usuário a deixa.*/

const Drawer = createDrawerNavigator();

/*converteremos const DrawerNavigator de um
componente funcional a um componente class:*/

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true
    };
  }

/*Como estamos adicionando o export default aqui, certifique-se de remover a instrução
export escrita na última linha da classe anterior.
Agora, semelhante a como criamos o componentDidMount() na navegação em abas,
faremos o mesmo aqui também:*/

  componentDidMount() {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function(snapshot) {
        theme = snapshot.val().current_theme;
      });
    this.setState({ light_theme: theme === "light" ? true : false });
  }

/* adicionaremos nosso Drawer Navigator dentro de uma função render():*/

  render() {
    let props = this.props;
    return (

/*adicionaremos um atributo drawerContentOptions (opções do conteúdo da
gaveta) ao nosso componente <Drawer.Navigator>:*/

      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          inactiveTintColor: this.state.light_theme ? "black" : "white",
          itemStyle: { marginVertical: 5 }
        }}

/*Em seguida, adicionaremos outro atributo drawerContent (conteúdo da gaveta) no qual 
podemos definir nosso menu personalizado para o Drawer:*/

        drawerContent={props => <CustomSidebarMenu {...props} />}
      >
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
  }
}