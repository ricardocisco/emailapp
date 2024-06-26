import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { data } from "../services/data";
import { Icon } from "react-native-elements";

export default function InboxScreen({ navigation }) {
  const [emails, setEmails] = useState(data);
  const [isFavorite, setIsFavorite] = useState(null);

  return (
    <ScrollView style={stylesemail.background}>
      <View style={stylesemail.boxemail}>
        {emails.map((email, index) => (
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
                <Image style={stylesemail.image} src={email.imagem} />
                <View>
                  <Text>{email.nome}</Text>
                  <Text>{email.email}</Text>
                </View>
              </View>
              <View>
                <Text>{email.time} ago</Text>
                <TouchableOpacity onPress={() => setIsFavorite(email.id)}>
                  {isFavorite === email.id ? (
                    <Icon name="star" type="ionicon" color="#FFAD0F"></Icon>
                  ) : (
                    <Icon name="star-outline" type="ionicon"></Icon>
                  )}
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
