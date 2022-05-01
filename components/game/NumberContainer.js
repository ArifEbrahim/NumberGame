import { View, Text, StyleSheet } from "react-native";
import Colours from "../../utils/colours";

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colours.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    // fontFamily: 'open-sans-bold',
    color: Colours.accent500,
    fontSize: 36,
  }
})