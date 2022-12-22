/*Primeiro temos as instruções de importação para esta tela. A maioria das importações
são semelhantes às do componente StoryCard, mas podemos notar que também
importamos Ionicons desta vez.
*/

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

/*Podemos ver que definimos as fontes, como na tela anterior.
Então criamos nosso componente de classe StoryScreen e, dentro dele, adicionamos
um constructor — uma função para carregar nossas fontes e nossa função
componentDidMount(). Estas são as coisas que temos novamente, que foram feitas
anteriormente em outras telas.
Uma novidade aqui são os 2 estados novos — speakerColor (cor do alto-falante)
definido como gray (cinza) e speakerIcon (ícone do alto-falante) definido como
'volume-high-outline'.
Isso é para o ícone do alto-falante que temos em nosso resultado.*/

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {

/*Para usar essa navigation em nosso componente <StoryCard>, teremos que usar um componente
<TouchableOpacity> para envolver o conteúdo do nosso cartão dentro dele e realizar a navegação no evento
onPress do nosso componente <TouchableOpacity>.*/

return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>

/*Aqui, em vez de uma view, estamos usando um <TouchableOpacity> como nosso
contêiner. Em nossa prop onPress do TouchableOpacity, estamos chamando
this.props.navigation.navigate() para navegar até a StoryScreen, e então pssamos
nosso this.props.story para ela como uma prop chamada story.*/

            this.props.navigation.navigate("Tela de Histórias", {
              story: this.props.story
            })
          }
        >
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/story_image_1.png")}
              style={styles.storyImage}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.story.title}
              </Text>
              <Text style={styles.storyAuthorText}>
                {this.props.story.author}
              </Text>
              <Text style={styles.descriptionText}>
                {this.props.story.description}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});