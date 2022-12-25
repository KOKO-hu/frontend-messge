import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Message from "./screen/message";
import ListMessage from "./screen/listMessage";
import { NativeBaseProvider } from "native-base";

import io from "socket.io-client";
import Context from "./context";
import SignIn from "./screen/signIn";
import { useEffect, useState } from "react";
import { getSecureData, setAuthHeaders } from "./api/user";
import { store } from "./reduceToolKit/store";
import { Provider } from "react-redux";
const socket = io("https://9984-41-79-219-148.eu.ngrok.io");
const Stack = createStackNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(async () => {
    const token = await getSecureData("token");
    if (token) {
      setIsLoading(true);
      const header = await setAuthHeaders(token);
      if (header) {
        console.log("super");
      }
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <Context.Provider value={{ item: socket }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Provider store={store}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={isLoading ? "listMessage" : "signIn"}
            >
              <Stack.Screen name="signIn" component={SignIn} />
              <Stack.Screen name="listMessage" component={ListMessage} />
              <Stack.Screen name="message" component={Message} />
            </Stack.Navigator>
          </Provider>
        </NavigationContainer>
      </NativeBaseProvider>
    </Context.Provider>
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
