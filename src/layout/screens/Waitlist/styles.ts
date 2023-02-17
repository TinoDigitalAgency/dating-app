import {StyleSheet} from "react-native";
import {THEME} from "../../../utils/theme";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.WHITE_COLOR
  },
  container: {
    paddingTop: 32,
    paddingHorizontal: 24,
    position: "relative",
    justifyContent: "space-between",
    height: '100%'
  },
  backButtonImage: {
    width: 7,
    height: 12
  },
  backgroundImage: {
    position: "absolute",
    resizeMode: "contain",
    width: 245,
    height: 218,
    right: -20,
    top: 60
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90
  },
  mainImage: {
    width: 108,
    height: 108,

  },
  exploreBlock: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: "row",
    alignItems: "center"
  },
  exploreTextImage: {
    width: 27,
    height: 23,
    resizeMode: "contain",
    marginRight: 8
  },
  topWrapper: {

  },
  bottomWrapper: {
    marginTop: 'auto',
    paddingBottom: 20
  },
});
