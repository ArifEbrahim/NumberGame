import { StyleSheet, Text } from "react-native";
import React from "react";
import Colours from "../utils/colours";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colours.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colours.accent500,
    padding: 12,
    borderRadius: 6,
  },
});
