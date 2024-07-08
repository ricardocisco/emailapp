import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFavorite } from "../context/FavoriteContext";
import { Icon } from "react-native-elements";

export default function FavoritoScreen({ navigation }) {
  const { favoriteEmails, toggleFavorite } = useFavorite();

  return (
    <ScrollView style={stylesemail.background}>
      <View style={stylesemail.boxemail}>
        {favoriteEmails.map((email, index) => (
          <TouchableOpacity
            key={index}
            style={{
              marginTop: 10,
              borderBlockColor: "#686D76",
              borderBottomWidth: 1,
            }}
            onPress={() => navigation.navigate("Email", { email })}
          >
            <View style={stylesemail.headeremail}>
              <View style={stylesemail.boximage}>
                <Image
                  style={stylesemail.image}
                  source={{ uri: email.imagem }}
                />
                <View>
                  <Text>{email.nome}</Text>
                  <Text>{email.email}</Text>
                </View>
              </View>
              <View>
                <Text>{email.time} ago</Text>
                <TouchableOpacity onPress={() => toggleFavorite(email)}>
                  <Icon name="star" type="ionicon" color="#FFAD0F" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={stylesemail.emailtitle}>{email.titulo}</Text>
            <Text style={stylesemail.emaildescription}>{email.descricao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const stylesemail = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
  },
  boxemail: {
    display: "flex",
    justifyContent: "space-between",
    padding: 16,
    height: "auto",
  },
  boximage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headeremail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  emailtitle: {
    fontSize: 16,
  },
  emaildescription: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 20,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 15,
  },
});
