import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {ROUTES} from "./routes";
import WaitlistScreen from "../layout/screens/Waitlist/WaitlistScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.WAITLIST}
        component={WaitlistScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigation