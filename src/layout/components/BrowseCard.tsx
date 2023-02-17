import React, {ReactNode} from "react";
import {StyleSheet,  View, ViewStyle} from "react-native";
import {THEME} from "../../utils/theme";

type CardProps = {
  styles?: ViewStyle,
  children: ReactNode
}

const BrowseCard = (props:CardProps) => {
  return (
    <View style={[
      styles.card,
      props.styles
    ]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.BACKGROUND_LIGHT_COLOR,
    borderColor: THEME.PEACH_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 24
  }
});

export default BrowseCard