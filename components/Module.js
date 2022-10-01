import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "./BackButton";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Level 1: Beginner",
    description: "Description about beginner Level Tasks",
    image: "https://i.imgur.com/RYncwOS.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Level 2: Intermediate",
    description: "Description about Intermediate Level Tasks",
    image: "https://i.imgur.com/pqKLXoz.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Level 3: Advanced",
    description: "Description about Advanced Level Tasks",
    image: "https://i.imgur.com/lqU5VZi.png",
  },
];

const Item = ({ title, description, image }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{description} </Text>
    <Image
      style={styles.imgAvatar}
      source={{ uri: image }}
      resizeMode={"cover"}
    />
  </View>
);

export default function Module({
  phoneNumber,
  setPhoneNumber,
  screenNo,
  setScreenNo,
  navigation,
  callback,
}) {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );
  return (
    <View style={styles.container}>
      <BackButton
        onPress={() => {
          setScreenNo((prev) => prev - 1);
        }}
      />
      <StatusBar style="auto" />
      <Text style={styles.welcome}>Welcome to DronaJr, User !!</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    paddingTop: 200,
    paddingBottom: -100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgAvatar: {
    marginLeft: 170,
    width: 60,
    height: 60,
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
  item: {
    padding: 20,
    backgroundColor: "#eee",
    margin: 10,
    borderRadius: 10,
    borderBottomColor: "#b3b300",
    borderBottomWidth: 5,
    borderRightColor: "#cccc00",
    borderRightWidth: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  loginBtn: {
    width: "80%",
    marginBottom: 100,
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
