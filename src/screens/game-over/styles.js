import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes/colors";

import { fontsFamily, fontsSizes } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fondo,
    alignItems: "center",
    paddingTop: 40,
  },
  contentLandscape: {
    width: "80%",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    width: "80%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 5,
    fontFamily: fontsFamily.secondary,
    color: colors.white,
  },
  ButtonJugar: {
    fontFamily: fontsFamily.primary,
    fontSize: fontsSizes.xlarge,
  },
});
