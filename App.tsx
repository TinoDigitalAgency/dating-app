import {NavigationContainer} from "@react-navigation/native";
import AppNavigation from "./src/navigation/AppNavigation";
import {useFonts} from "expo-font";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );

}