import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

import { Audio } from "expo-av";

import LottieView from "lottie-react-native";

export default function Task5({ setPosition }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [sound, setSound] = useState();
  const playSound = async () => {
    try {
      console.log("Loading sound");
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/message/task3_4.mp3")
      );
      setSound(sound);
      console.log("playing");
      await sound.playAsync();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 50,
        display: "none",
        useNativeDriver: true,
      }).start();
      playSound();
    });
  }, []);

  return (
    <>
      {/* <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text>Hello World</Text>
      </Animated.View> */}

      <View style={styles.image_container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/Task_3/task_3_3.png")}
        ></ImageBackground>
        <View
          style={{
            position: "absolute",
            width: "100%",
            justifyContent: "center",
            zIndex: 39,
            top: 690,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "45%",
              borderRadius: 50,
              paddingHorizontal: 10,
              height: 40,
              padding: 0,
              backgroundColor: "white",
            }}
            placeholder="Text message"
            onSubmitEditing={() => {
              setPosition((curr) => curr + 1);
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image_container: {
    backgroundColor: "black",
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
    opacity: 0.8,
    height: "100%",
    padding: 100,
    marginTop: 40,
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
