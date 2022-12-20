//importações necessarias 

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {

/* (visualizar imagem) com image_1 como o valor. Isso ocorre porque queremos manter a primeira 
imagem sendo visualizada por padrão.*/

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: "image_1",
      dropdownHeight: 40
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);

/*Agora, uma vez que o valor do menu suspenso for alterado, ele chamará a função setState() (definir estado),
que renderizará novamente a tela inteira.*/

    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

/*dentro da condição else, adicionaremos um dicionário
preview_images com a chave como image_1, image_2, image_3, image_4 e
image_5. Os valores serão os respectivos caminhos das imagens.*/

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let preview_images = {
        image_1: require("../assets/story_image_1.png"),
        image_2: require("../assets/story_image_2.png"),
        image_3: require("../assets/story_image_3.png"),
        image_4: require("../assets/story_image_4.png"),
        image_5: require("../assets/story_image_5.png")
      };

/*Por fim, adicionaremos um scroll view em nossa tela contendo o código para visualizar a imagem:*/
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Nova História</Text>
            </View>
          </View> 
          <View style={styles.fieldsContainer}>
            <ScrollView>
              <Image
                source={preview_images[this.state.previewImage]}
                style={styles.previewImage}

/*Usamos um scrollview porque, mais tarde, mais campos de entrada serão adicionados.
Temos então uma tag <Image> que exibe a visualização prévia da imagem do estado.*/

              ></Image>
              <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                <DropDownPicker /*é nosso menu suspenso. Especificamos as opções do menu suspenso 
                com a ajuda do atributo items */

                  items={[
                    { label: "Image 1", value: "image_1" },
                    { label: "Image 2", value: "image_2" },
                    { label: "Image 3", value: "image_3" },
                    { label: "Image 4", value: "image_4" },
                    { label: "Image 5", value: "image_5" }
                  ]}

/*e demos a ele o valor padrão com o atributo defaultValue.*/

                  defaultValue={this.state.previewImage}

/*Damos alguns estilos ao container no qual as opções serão exibidas ao clicar no menu
suspenso com o atributo*/

                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
/*cor do plano de fundo como transparente porque queremos que o campo do menu suspenso tenha a 
mesma cor do plano de fundo.*/

                  style={{ backgroundColor: "transparent" }}
                  itemStyle={{
                    justifyContent: "flex-start"
                  }}

/*Da mesma forma, demos estilo ao menu suspenso com a ajuda do atributo
dropDownStyle e também definimos os estilos para os rótulos e as setas com os
atributos labelStyle e arrowStyle.*/

                  dropDownStyle={{ backgroundColor: "#2f345d" }}
                  labelStyle={{
                    color: "white",
                    fontFamily: "Bubblegum-Sans"
                  }}
                  arrowStyle={{
                    color: "white",
                    fontFamily: "Bubblegum-Sans"
                  }}

/*Adicionamos um atributo onChangeItem no qual alteramos o estado previewImage
para a opção recém-selecionada.*/


                  onChangeItem={item =>
                    this.setState({
                      previewImage: item.value
                    })
                  }
                />
              </View>

              <TextInput

/*Aqui, dentro do <ScrollView>, adicionamos mais 4 visualizações com <TextInput>
dentro. Essas entradas de texto contêm os estilos.

Eles também contêm um atributo onChangeText, que define seu valor como um estado.
Usamos o atributo placeholder (espaço reservado) para definir os espaços reservados e
especificamos se a caixa de texto específica é multiline (possui múltiplas linhas) ou não.
Se for, definimos o número de linhas com o atributo numberOfLines (número de linhas)
e, finalmente, definimos a cor dos espaços reservados com o atributo
placeholderTextColor (cor do texto do espaço reservado).
Também adicionamos os estilos relevantes para eles:*/

                style={styles.inputFont}
                onChangeText={title => this.setState({ title })}
                placeholder={"Título"}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={description => this.setState({ description })}
                placeholder={"Descrição"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={story => this.setState({ story })}
                placeholder={"História"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={moral => this.setState({ moral })}
                placeholder={"Moral da História"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },

/*Aqui, nosso fieldContainer terá 85% da altura, mas como está dentro de um
<ScrollView>, será rolável.*/

  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  }
});

/*Ok, agora você deve estar se
perguntando por que não
adicionamos um botão enviar.
Faremos isso depois, quando
integrarmos nosso aplicativo ao
Firebase.*/
