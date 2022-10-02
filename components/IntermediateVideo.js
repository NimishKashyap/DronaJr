import React, { useEffect, useRef, useState } from "react";
import { Audio, Video } from "expo-av";
import { View } from "react-native";

export const IntermediateVideo = ({ navigation }) => {
  const video = useRef(null);
  // const [status, setStatus] = useState({ didJustFinish: () => {} });

  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={video}
        style={{ flex: 1 }}
        source={require("../assets/message1.mp4")}
        shouldPlay
        resizeMode="cover"
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            navigation.push("intermediate");
          }
        }}
      />
    </View>
  );
};
