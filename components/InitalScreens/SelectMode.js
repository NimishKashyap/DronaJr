// This component is to select the mode
import { StatusBar } from "expo-status-bar";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import BackButton from "../BackButton";

export default function SelectMode({ screenNo, setScreenNo }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackButton
        onPress={() => {
          setScreenNo((prev) => prev - 1);
        }}
      />

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>
          SinglePlayer <AntDesign name="rightcircle" size={24} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>
          Multiplayer <AntDesign name="rightcircle" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    display: "flex",
    flexDirection: "row",
  },
  textStyle: {
    paddingRight: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#eeee",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    paddingHorizontal: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderBottomColor: "#aa7441",
    borderBottomWidth: 8,
    backgroundColor: "#d69251",
  },
  loginText: {
    fontWeight: "900",
    fontSize: 20,
    color: "white",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
});
