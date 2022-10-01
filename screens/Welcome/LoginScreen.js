import { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import EnterDetails from "../../components/InitalScreens/EnterDetails";
import EnterPhone from "../../components/InitalScreens/EnterPhone";
import GetStarted from "../../components/InitalScreens/GetStarted";
import SelectMode from "../../components/InitalScreens/SelectMode";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);

  const [screenNo, setScreenNo] = useState(4);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (err) {
      console.error("Invalid code");
    }
  }
  //   return (
  //     // <View style={styles.container}>
  //     //   <Image style={styles.image} source={require("../../assets/logo.jpg")} />

  //     //   <StatusBar style="auto" />
  //     //   {/* <View style={styles.inputView}> */}
  //     //   {/* <TextInput
  //     //       style={styles.TextInput}
  //     //       placeholder="Email."
  //     //       placeholderTextColor="#003f5c"
  //     //       onChangeText={(phone) => setPhoneNumber(phone)}
  //     //     /> */}
  //     //   <Text style={styles.welcome}>Welcome</Text>
  //     //   {/* </View> */}

  //     //   <TouchableOpacity style={styles.loginBtn}>
  //     //     <Text style={styles.loginText}>Let's Get Started</Text>
  //     //   </TouchableOpacity>
  //     // </View>
  //     // <GetStarted />

  //   );
  if (screenNo === 1) {
    return <GetStarted />;
  } else if (screenNo === 2) {
    return <EnterPhone />;
  } else if (screenNo === 3) {
    return <EnterDetails />;
  } else if (screenNo === 4) {
    return <SelectMode />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
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
