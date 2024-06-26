import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Switch,
  Button,
} from "react-native";

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.title}>Aparencia</Text>
      <View style={styles.switchstyle}>
        <Switch
          trackColor={{ false: "#767577", true: "#27AE60" }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <Text style={styles.title}>Notificações</Text>
        <View style={styles.switchrow}>
          <Text style={styles.switchtitle}>Receber Notificações</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#27AE60" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchrow}>
          <Text style={styles.switchtitle}>Som</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#27AE60" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchrow}>
          <Text style={styles.switchtitle}>Resumo de Notificações</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#27AE60" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Desempenho</Text>
        <View style={styles.switchrow}>
          <Text style={styles.switchtitle}>Animações</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#27AE60" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchrow}>
          <Text style={styles.switchtitle}>Atualizações Automaticas</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#27AE60" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchrow}>
          <Text style={styles.switchtitle}>Limitar Dados em Segundo Plano</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#27AE60" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Histórico</Text>
        <Button title="Limpar Historico"></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
  },
  switchstyle: {
    paddingHorizontal: 20,
  },
  switchrow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  switchtitle: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    padding: 15,
    marginTop: 20,
  },
});
