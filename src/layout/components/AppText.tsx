import React, {ReactNode} from "react";
import {StyleSheet, Text, TextStyle} from "react-native";
import {THEME} from "../../utils/theme";

type TextProps = {
  bottom?: number,
  top?: number
  styles?: TextStyle,
  center?: boolean,
  color?: string,
  weight?: number,
  size?: number,
  height?: number,
  children: ReactNode
}

const AppText = (props:TextProps) => {
  return (
    <Text style={[
      styles.text,
      props.size ? {fontSize: props.size} : null,
      props.height ? {lineHeight: props.height} : null,
      props.top ? {marginTop: props.top} : null,
      props.bottom ? {marginBottom: props.bottom} : null,
      props.center ? {textAlign: 'center'} : null,
      props.color ? {color: props.color} : null,
      props.weight == 500 ? {fontFamily: 'Poppins-medium'} : null,
      props.weight == 600 ? {fontFamily: 'Poppins-semibold'} : null,
      props.styles
    ]}
    >
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 19,
    color: THEME.SECONDARY_COLOR
  }
});

export default AppText