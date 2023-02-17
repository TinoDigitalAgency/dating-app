import React, {ReactNode} from "react";
import {StyleSheet, Text, TextStyle} from "react-native";
import {THEME} from "../../utils/theme";

type TextProps = {
  bottom?: number,
  top?: number
  styles?: TextStyle,
  center?: boolean,
  children: ReactNode
}

const AppTitle = (props:TextProps) => {
  return (
    <Text style={[
      styles.text,
      props.top ? {marginTop: props.top} : null,
      props.bottom ? {marginBottom: props.bottom} : null,
      props.center ? {textAlign: 'center'} : null,
      props.styles
    ]}
    >
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-bold',
    fontSize: 22,
    lineHeight: 33,
    color: THEME.PRIMARY_COLOR
  }
});

export default AppTitle