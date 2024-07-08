import React, { useEffect, useState } from "react";
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
import { useSearch } from "../context/SearchContext";
import { useFavorite } from "../context/FavoriteContext";

interface Email {
  id: number;
  nome: string;
  email: string;
  titulo: string;
  descricao: string;
  time: string;
  imagem: string;
}

export default function InboxScreen({ navigation }) {
  const [emails, setEmails] = useState<Email[]>(data);
  const { favoriteEmails, toggleFavorite } = useFavorite();
  const { searchQuery } = useSearch();

  useEffect(() => {
    if (searchQuery) {
      const filteredEmails = data.filter(
        (email) =>
          email.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
          email.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
          email.descricao.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setEmails(filteredEmails);
    } else {
      setEmails(data);
    }
  }, [searchQuery]);

  const isFavorite = (email: Email) => {
    return favoriteEmails.some((favEmail) => favEmail.id === email.id);
  };

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
                <TouchableOpacity onPress={() => toggleFavorite(email)}>
                  {isFavorite(email) ? (
                    <Icon name="star" type="ionicon" color="#FFAD0F" />
                  ) : (
                    <Icon name="star-outline" type="ionicon" />
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
