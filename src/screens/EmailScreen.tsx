import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

export default function EmailScreen({ route, navigation }) {
  const { email } = route.params;

  return (
    <View style={styles.boxmain}>
      <View>
        <View style={styles.boxemail}>
          <View style={styles.boxname}>
            <Image style={styles.image} src={email.imagem} />
            <View>
              <Text style={styles.name}>{email.nome}</Text>
              <Text>{email.time}</Text>
            </View>
          </View>
          <Text style={styles.email}>{email.email}</Text>
        </View>
        <View style={styles.contentemail}>
          <Text style={styles.title}>{email.titulo}</Text>
          <Text style={styles.description}>{email.descricao}</Text>
        </View>
      </View>
      <View style={styles.boxbuttons}>
        <TouchableOpacity>
          <Text style={styles.buttontext}>Encaminhar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttontext}>Responder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxmain: {
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  boxbuttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    padding: 20,
  },
  boxemail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  boxname: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentemail: {
    marginHorizontal: 20,
  },
  name: {
    fontSize: 16,
  },
  email: {
    fontSize: 13,
  },
  title: {
    fontSize: 21,
    marginTop: 12,
  },
  description: {
    fontSize: 17,
    marginTop: 12,
  },
  buttontext: {
    fontSize: 17,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 5,
  },
});
