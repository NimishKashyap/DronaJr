import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../components/BackButton";

export default function Module({
  phoneNumber,
  setPhoneNumber,
  screenNo,
  setScreenNo,
  navigation,
  callback,
}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.welcome}>Welcome to DronaJr, User !!</Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          callback(phoneNumber);
        }}
      >
        <Text style={styles.loginText}>Next</Text>
        <AntDesign
          style={styles.icon}
          name="rightcircle"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
    paddingLeft: 20,
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 15,
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
    paddingHorizontal: 20,
    flexDirection: "row",
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderBottomColor: "#ccb419",
    borderBottomWidth: 8,
    backgroundColor: "#ebd960",
  },
  loginText: {
    fontWeight: "900",
    letterSpacing: 3,
    fontSize: 20,
    color: "white",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
});
