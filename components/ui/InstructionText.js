import { StyleSheet, Text } from "react-native";
import Colours from "../../utils/colours";

export default function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colours.accent500,
    fontSize: 24,
  },
});
