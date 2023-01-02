import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Column,
  Heading,
  Image,
  Input,
} from "native-base";
import { sendUser, setAuthHeaders } from "../api/user";
import { useDispatch } from "react-redux";
import { getUser } from "../reduceToolKit/userSlice";
/* import * as SecureStore from "expo-secure-store"; */
export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const connexion = async () => {
    const datauser = { email, motDePasse: password };
    try {
      const { data } = await sendUser(datauser);
      if (data) {
        setAuthHeaders(data.tokens);
        dispatch(getUser(data.user));
        
        navigation.navigate("listMessage");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box flex={1} safeArea>
      <Column flex={1} alignItems={"center"} justifyContent={"center"}>
        <Center>
          <Heading color={"#5DD58D"} size="2xl">
            ship
          </Heading>
        </Center>
        <Box my={4}>
          <Box mx={3} my={1}>
            <Text>Email</Text>
          </Box>
          <Input
            w={"80"}
            variant="rounded"
            value={email}
            onChangeText={(data) => setEmail(data)}
            placeholder="email"
          />
        </Box>
        <Box>
          <Box mx={3} my={1}>
            <Text>Mot de passe</Text>
          </Box>
          <Input
            w={"80"}
            variant="rounded"
            value={password}
            onChangeText={(data) => setPassword(data)}
            placeholder="Mot de passe"
          />
        </Box>

        <Button
          my={4}
          onPress={() => connexion()}
          w={"90%"}
          bgColor={"#5DD58D"}
          borderRadius={40}
          h={10}
          size="sm"
        >
          Connexion
        </Button>
      </Column>
    </Box>
  );
}

const styles = StyleSheet.create({});
