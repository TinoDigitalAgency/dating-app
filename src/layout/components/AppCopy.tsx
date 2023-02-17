import React from "react";
import {Image, StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";
import * as Clipboard from 'expo-clipboard';
import {THEME} from "../../utils/theme";
import AppText from "./AppText";

type CopyProps = {
  styles?: ViewStyle,
  bottom?: number,
  top?: number,
  copyText: string
}

const AppCopy = (props:CopyProps) => {

  const copyHandler = async () => {
    await Clipboard.setStringAsync(props.copyText);
  };

  return (
    <View style={[
      styles.block,
      props.top ? {marginTop: props.top} : null,
      props.bottom ? {marginBottom: props.bottom} : null,
      props.styles
    ]}>
      <AppText color={THEME.PRIMARY_COLOR} weight={600} size={12} height={19}>{props.copyText}</AppText>
      <TouchableOpacity style={styles.copyButton} onPress={copyHandler}>
        <Image source={require('../../../assets/images/copy.png')} style={styles.copyButtonImage}/>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  block: {
    borderColor: THEME.GRAY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    position: "relative"
  },
  copyButton: {
    position: "absolute",
    right: 15,
    top: 18
  },
  copyButtonImage: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  }
});

export default AppCopy