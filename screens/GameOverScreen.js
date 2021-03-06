import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colours from "../utils/colours";

export default function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colours.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  }
})