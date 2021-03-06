import { StyleSheet, Text } from "react-native";
import Colours from "../../utils/colours";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    // fontFamily: 'open-sans',
    color: Colours.accent500,
    fontSize: 24,
  },
});
