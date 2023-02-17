import React from "react";
import {StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import {THEME} from "../../utils/theme";
import AppText from "./AppText";

type ButtonProps = {
  styles?: ViewStyle,
  text?: string,
}

const PrimaryButton = (props:ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        props.styles
      ]}
    >
      <AppText color={THEME.WHITE_COLOR} size={14} height={16} weight={500} center>{props.text}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.PRIMARY_COLOR,
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: 270,
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default PrimaryButton