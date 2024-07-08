import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import { SearchProvider } from "./src/context/SearchContext";
import { FavoriteProvider } from "./src/context/FavoriteContext";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchProvider>
        <FavoriteProvider>
          <Routes />
        </FavoriteProvider>
      </SearchProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
