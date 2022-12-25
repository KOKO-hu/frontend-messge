import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Text,
  Input,
  Row,
  Column,
  Heading,
  Icon,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import context from "../context";
import { Expediteur } from "../component/Expediteur";
import { Destinataire } from "../component/Destinataire";

export default function Message({ route }) {
  const to = route.params.ID;
/*   const [destinataire, setDestinataire] = useState(); */
  /*   console.log(to); */
  const { item: socket } = React.useContext(context);
  const [messages, setMessages] = React.useState();
  const [listMessage, setListMessage]= React.useState([]);

  const sendMessage = () => {
    setListMessage([...listMessage, messages])
    setMessages('')
/*  console.log(messages) */
  };

  return (
    <Box flex={1} safeArea>
      <Row>
        <Row
          p={2}
          bgColor={"#5DD58D"}
          w={"full"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Row>
            <Box mx={1}>
              <Avatar
                bg="cyan.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
                size={"md"}
              >
                TE
                <Avatar.Badge bg="green.500" />
              </Avatar>
            </Box>
            <Column mx={2}>
              <Box>
                <Heading size={"sm"} color="white">
                  John rodriguez
                </Heading>
              </Box>
              <Box>
                <Text color="white">en ligne à 12h30min</Text>
              </Box>
            </Column>
          </Row>
          <Row>
            <Box>
              <Icon
                as={Ionicons}
                size="6"
                name="call"
                color="white"
                _dark={{
                  color: "warmGray.50",
                }}
              />
            </Box>
            <Box mx={3}>
              <Icon
                as={MaterialIcons}
                size="6"
                name="videocam"
                color="white"
                _dark={{
                  color: "warmGray.50",
                }}
              />
            </Box>
          </Row>
        </Row>
      </Row>
      <Box flex={1} mx={2}>
        <ScrollView>
          <Destinataire />
          <Expediteur listMessage={listMessage} />
        </ScrollView>
      </Box>
      <Box p={2}>
        <Row alignItems={"center"}>
          <Box flex={1}>
            <Input
              value={messages}
              onChangeText={(data) => setMessages(data)}
              variant="rounded"
              placeholder="envoyer un message..."
            />
          </Box>
          <Pressable onPress={() => sendMessage()}>
            <Box mx={3} borderRadius={50} p={2} bgColor={"#5DD58D"}>
              <Icon
                as={MaterialCommunityIcons}
                size="6"
                name="send"
                color="white"
                _dark={{
                  color: "warmGray.50",
                }}
              />
            </Box>
          </Pressable>
        </Row>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
