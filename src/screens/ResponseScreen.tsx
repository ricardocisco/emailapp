import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Icon, Input } from "react-native-elements";

export default function ResponseScreen({ route, navigation }) {
  const { email } = route.params;

  return (
    <View style={style.content}>
      <View style={style.boxemail}>
        <View>
          <Text style={style.boxtitle}>De: </Text>
          <TextInput style={style.input}>{email.email}</TextInput>
        </View>
        <View>
          <Text style={style.boxtitle}>Para:</Text>
          <TextInput style={style.input} />
        </View>
        <View>
          <Text style={style.boxtitle}>Titulo:</Text>
          <TextInput style={style.input} />
        </View>
        <View>
          <TextInput
            style={style.input}
            placeholder="Corpo email"
            numberOfLines={4}
            maxLength={150}
            editable
            multiline
          />
        </View>
      </View>
      <View style={style.boxbutton}>
        <TouchableOpacity style={style.buttonclip}>
          <Icon name="clipboard-outline" type="ionicon" color="#000"></Icon>
          <Text style={style.textsend}>Add Anexo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonsend}>
          <Icon name="paper-plane-outline" type="ionicon" color="#fff"></Icon>
          <Text style={style.textclip}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBlockColor: "#686D76",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  content: {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  boxbutton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
  },
  textclip: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  textsend: {
    color: "#000",
    fontSize: 16,
    marginLeft: 8,
  },
  buttonclip: {
    flexDirection: "row",
    backgroundColor: "#e3e3e3",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonsend: {
    flexDirection: "row",
    backgroundColor: "#0368FF",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  boxemail: {
    display: "flex",
    marginHorizontal: 20,
    marginTop: 30,
  },
  boxtitle: { fontSize: 16 },
});
