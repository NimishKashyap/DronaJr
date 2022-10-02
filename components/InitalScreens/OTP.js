import { AntDesign } from "@expo/vector-icons";
import React, { useState, useRef, useEffect, useCallback } from "react";
import LottieView from "lottie-react-native";
import {
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    // flex: 1,
    marginHorizontal: 4,
    fontSize: 32,
    textAlign: "center",
    backgroundColor: "#ddd",
    borderRadius: 2,
    // paddingVertical: 12,
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
    borderBottomColor: "#46CDCF",
    borderBottomWidth: 8,
    backgroundColor: "#ABEDD8",
  },
  OTP: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
});

const initCodes = [];
export default function OTP({
  otpStyles,
  codeCount = 6,
  onTyping,
  onFinish,
  setCode,
  callback,
}) {
  const inputCodeRef = useRef(new Array());
  const [codes, setCodes] = useState(initCodes);
  useEffect(() => {
    const codes = [];
    for (let i = 0; i < codeCount; i++) {
      codes.push("");
    }
    setCodes(codes);
  }, []);

  useEffect(() => {
    onTyping && onTyping(getCodes());
    const isTypeFinish = codes.every(function (i) {
      return i !== "";
    });
    if (isTypeFinish) {
      onFinish && onFinish(getCodes());
    }
  }, [codes]);

  const getCodes = () => {
    let codeString = "";
    codes.forEach((code) => {
      codeString += code;
    });
    return codeString;
  };

  const onChangeCode = (code, index) => {
    const typedCode = code.slice(-1);
    const currentCodes = [...codes];
    currentCodes[index] = typedCode;
    setCodes(currentCodes);
  };
  const onKeyPress = (event, index) => {
    const key = event.nativeEvent.key;
    let destIndex = index;
    if (key === "Backspace") {
      destIndex = index > 0 ? index - 1 : 0;
    } else {
      destIndex = index < codeCount - 1 ? index + 1 : codeCount - 1;
    }
    inputCodeRef.current[destIndex].focus();
  };
  const animation = useRef(null);
  return (
    <View style={styles.OTP}>
             <LottieView
        autoPlay
        style={{
          position: "absolute",
          width: 630,
          height: 1090,
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={animation}
        source={require("../../assets/animations/background1.json")}
      />
      <View style={styles.form}>
        {codes.map((code, index) => {
          return (
            <TextInput
              key={index}
              keyboardType="phone-pad"
              ref={(element) => inputCodeRef.current.push(element)}
              style={[
                styles.input,
                otpStyles,
                { width: width / (codeCount + 2), height: height / 14 },
              ]}
              onChangeText={(text) => onChangeCode(text, index)}
              onKeyPress={(event) => onKeyPress(event, index)}
              value={code}
            />
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          setCode(getCodes());
          console.log(getCodes());
          callback();
        }}
      >
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
