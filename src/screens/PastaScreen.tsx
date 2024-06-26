import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

export default function PastaScreen({ navigation }) {
  return (
    <ScrollView style={stylesHome.background}>
      <Text style={stylesHome.title}>Padrão</Text>
      <View>
        <TouchableOpacity
          style={stylesHome.botaoOpcao}
          onPress={() => navigation.navigate("Calendario")}
        >
          <Icon name="calendar-outline" type="ionicon"></Icon>
          <Text style={stylesHome.text}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesHome.botaoOpcao}
          onPress={() => navigation.navigate("Favoritos")}
        >
          <Icon name="star-outline" type="ionicon"></Icon>
          <Text style={stylesHome.text}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.botaoOpcao}>
          <Icon name="time-outline" type="ionicon"></Icon>
          <Text style={stylesHome.text}>Ler Depois</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.botaoOpcao}>
          <Icon name="send-outline" type="ionicon"></Icon>
          <Text style={stylesHome.text}>Enviados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.botaoOpcao}>
          <Icon name="trash-outline" type="ionicon"></Icon>
          <Text style={stylesHome.text}>Lixeira</Text>
        </TouchableOpacity>
      </View>
      <Text style={stylesHome.title}>Criado</Text>
    </ScrollView>
  );
}

const stylesHome = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
  },
  botaoOpcao: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    padding: 10,
    marginHorizontal: 10,
    margin: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
  },
  title: {
    padding: 15,
    fontSize: 20,
  },
});
