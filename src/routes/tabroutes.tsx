import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import InboxScreen from "../screens/InboxScreen";
import FavoritoScreen from "../screens/FavoritoScreen";
import PastaScreen from "../screens/PastaScreen";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import { useSearch } from "../context/SearchContext";
import NetInfo from "@react-native-community/netinfo";

const Tab = createMaterialTopTabNavigator();

export default function TabRoutes({ navigation }) {
  const { searchQuery, setSearchQuery } = useSearch();
  const [nome, setNome] = useState("Rachel Jacobs");
  const [isSearching, setIsSearching] = useState(false);

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <View style={styles.containertop}>
        {isSearching ? (
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Pesquisar"
              style={styles.input}
              value={searchQuery}
              onChangeText={setSearchQuery}
            ></TextInput>
            <TouchableOpacity onPress={() => setIsSearching(false)}>
              <Icon name="close-outline" type="ionicon"></Icon>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.boxperfil}>
            <View style={styles.flexbox}>
              <Image
                style={styles.image}
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              ></Image>
              <Text style={styles.perfiltext}>{nome}</Text>
            </View>
            <View style={styles.flexbox}>
              <TouchableOpacity
                style={styles.iconstyle}
                onPress={() => setIsSearching(true)}
              >
                <Icon name="search" type="ionicon"></Icon>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconstyle}
                onPress={() => navigation.navigate("Configurações")}
              >
                <Icon name="settings-outline" type="ionicon"></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconstyle}>
                {isConnected ? (
                  <Icon name="cloudy-outline" type="ionicon"></Icon>
                ) : (
                  <Icon name="cloud-offline-outline" type="ionicon"></Icon>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#0368FF",
          tabBarInactiveTintColor: "#000",
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="folder-outline"
                type="ionicon"
                color={color}
                size={size}
              ></Icon>
            ),
          }}
          name="Pastas"
          component={PastaScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="file-tray-outline"
                type="ionicon"
                color={color}
                size={size}
              ></Icon>
            ),
          }}
          name="Inbox"
          component={InboxScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="star-outline"
                type="ionicon"
                color={color}
                size={size}
              ></Icon>
            ),
          }}
          name="Favoritos"
          component={FavoritoScreen}
        />
      </Tab.Navigator>
      <View style={styles.boxbuttonwrite}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Escrever")}
          style={styles.buttonwrite}
        >
          <Icon
            name="create-outline"
            type="ionicon"
            color="#fff"
            size={28}
          ></Icon>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  boxbuttonwrite: {
    backgroundColor: "#fff",
  },
  buttonwrite: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#0368FF",
    borderRadius: 50,
    padding: 12,
    alignSelf: "center",
  },
  containertop: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  searchbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  boxperfil: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 14,
  },
  perfiltext: {
    fontSize: 17,
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconstyle: {
    marginRight: 10,
  },
  inputbox: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderRadius: 25,
  },
  input: {
    width: "90%",
    height: 40,
    padding: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
