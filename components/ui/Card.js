import { View, StyleSheet } from "react-native";
import Colours from "../../utils/colours";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 32,
    backgroundColor: Colours.primary800,
    borderRadius: 8,
    marginHorizontal: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
})