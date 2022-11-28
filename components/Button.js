import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { COLORS, SIZES } from "../constants";
import React from "react";

export default function Button({ text, onPress, icon }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image 
        source={icon}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      <Text style={{ textAlign: "center", color: COLORS.primary }}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginBottom: 20
  },
});
