import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Message from "./screen/message";
import ListMessage from "./screen/listMessage";
import { NativeBaseProvider } from "native-base";

import SignIn from "./screen/signIn";
import { useEffect, useState } from "react";
import { getSecureData, setAuthHeaders } from "./api/user";
import { store } from "./reduceToolKit/store";
import { Provider, useSelector } from "react-redux";
import SocketIoContext from "./context/SocketIoContext";
import TabNavigator from "./tabNavigator/tabNavigator";

const Stack = createStackNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    verifedToken = async () => {
      const token = await getSecureData("token");
      if (token) {
        setIsLoading(true);
        const header = await setAuthHeaders(token);

        if (header) {
          /*    console.log("super"); */
        }
      } else {
        setIsLoading(false);
      }
    };
    verifedToken();
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
          <SocketIoContext>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={isLoading ? "friend" : "signIn"}
            >
              <Stack.Screen name="friend" component={TabNavigator} />
              <Stack.Screen name="signIn" component={SignIn} />

              <Stack.Screen name="message" component={Message} />
            </Stack.Navigator>
          </SocketIoContext>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
