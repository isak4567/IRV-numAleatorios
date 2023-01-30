import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Dimensions, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/index";
import { colors } from "../../constants";

const GameOver = ({ rounds, selectedNumber, onHandleRestartGame }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    const suscription = Dimensions.addEventListener("change", statePortrait);

    return () => {
      suscription.remove();
    };
  });

  console.warn("isPortrait", isPortrait);

  return (
    <View style={styles.container}>
      <Card style={isPortrait ? styles.content : styles.contentLandscape}>
        <Image
          source={{
            uri: "https://media.tenor.com/o5iAkono3ysAAAAC/fin-the-end.gif",
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Rondas: {rounds}</Text>
        <Text style={styles.text}>Numero seleccionado: {selectedNumber}</Text>
        <TouchableOpacity onPress={onHandleRestartGame}>
          <Text style={styles.ButtonJugar}>Jugar otra vez?</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default GameOver;
