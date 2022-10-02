import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, TouchableWithoutFeedback } from "react-native";
import { Audio } from "expo-av";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Final({ setPosition, navigation }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [sound, setSound] = useState();

  const animation = useRef(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 50,
        display: "none",
        useNativeDriver: true,
      }).start();
      playSound();
    });
  }, []);

  const playSound = async () => {
    console.log("Loading sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/Task1_audio/8th.mp3")
    );
    setSound(sound);
    console.log("playing");
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <>
      <View style={[styles.image_container]}></View>
      <LottieView
        autoPlay
        style={{
          position: "absolute",
          width: 430,
          height: 550,
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={animation}
        source={require("../../assets/animations/congrats.json")}
      />
      <LottieView
        autoPlay
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          top: 150,
          left: 25,
          height: 300,
        }}
        ref={animation}
        source={require("../../assets/animations/congrats_text.json")}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: Dimensions.get("screen").height,
          transform: [
            {
              translateY: 100,
            },
          ],
        }}
      >
        <View
          style={{
            backgroundColor: "#ABEDD8",
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            borderRadius: 8,
            borderBottomWidth: 8,
            borderBottomColor: "#46CDCF",
          }}
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: "900",
                letterSpacing: 3,
                fontSize: 20,
                color: "white",
              }}
            >
              Continue
              <AntDesign name="rightcircle" size={24} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image_container: {
    backgroundColor: "white",
  },
  taskText: {
    position: "absolute",
    zIndex: 10,
    fontSize: 30,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    zIndex: 10,
  },

  image: {
    opacity: 0.6,
    height: "100%",
    marginTop: 10,
    margin: 5,
    padding: 60,
    width: undefined,
    resizeMode: "contain",
    zIndex: -1,
  },
  container: {
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
  greet_text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
//
