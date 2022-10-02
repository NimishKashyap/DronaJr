import React, { useEffect, useRef, useState } from "react";
import { Audio, Video } from "expo-av";
import { View } from "react-native";

export const AdvancedVideo = ({ navigation }) => {
  const video = useRef(null);
  // const [status, setStatus] = useState({ didJustFinish: () => {} });

  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={video}
        style={{ flex: 1, margin: 5 }}
        source={require("../assets/news.mp4")}
        shouldPlay
        resizeMode="cover"
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            navigation.push("advanced");
          }
        }}
      />
    </View>
  );
};
