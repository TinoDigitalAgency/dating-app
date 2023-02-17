import React from 'react'
import {Image, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "./styles";
import AppTitle from "../../components/AppTitle";
import AppText from "../../components/AppText";
import BrowseCard from "../../components/BrowseCard";
import {THEME} from "../../../utils/theme";
import AppCopy from "../../components/AppCopy";
import PrimaryButton from "../../components/PrimaryButton";

const WaitlistScreen = () => {

  const backHandler = () => {
    // navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Image source={require('../../../../assets/images/69.png')} style={styles.backgroundImage}/>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <TouchableOpacity onPress={backHandler}>
            <Image source={require('../../../../assets/images/back.png')} style={styles.backButtonImage}/>
          </TouchableOpacity>
          <View style={styles.imageWrapper}>
            <Image source={require('../../../../assets/images/girl.png')} style={styles.mainImage}/>
          </View>
          <AppTitle top={24} bottom={8} center>You are on the waitlist</AppTitle>
          <AppText center bottom={16}>We’re currently at matching capacity, but we’ll be opening up more spots soon.</AppText>
          <BrowseCard>
            <AppText center bottom={16}>Browse all our experiences right now</AppText>
            <View style={styles.exploreBlock}>
              <Image source={require('../../../../assets/images/69-small.png')} style={styles.exploreTextImage}/>
              <AppText color={THEME.PEACH_COLOR} weight={500}>Explore app</AppText>
            </View>
          </BrowseCard>
        </View>
        <View style={styles.bottomWrapper}>
          <AppText center bottom={16}>You can skip the line by inviting two friends through the links provided below.</AppText>
          <AppCopy bottom={32} copyText={'https://dateapp.uk/19348925cj2'}/>
          <PrimaryButton text={'Share Link'}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WaitlistScreen