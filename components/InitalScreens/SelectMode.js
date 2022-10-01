// This component is to select the mode
import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function SelectMode() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

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
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
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
