import { Pressable, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Column,
  Text,
  Heading,
  Row,
  Icon,
  IconButton,
  Center,
} from "native-base";

import { getUser, getUserMe, logoutUser } from "../api/user";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { getUserReducer } from "../reduceToolKit/userSlice";
import { Context, useSocketIo } from "../context/SocketIoContext";

export default function ListMessage({ navigation }) {
  const [allUser, setAllUser] = useState([]);
  const [identity, setIdentity] = useState();
  const { user } = useSelector((state) => state.userReducer);
  const socket = React.useContext(Context);
  const dispatch = useDispatch();
  const logout = () => {
    logoutUser();
    navigation.navigate("signIn");
  };

  useEffect(() => {
    /*     socket.emit("login", { userId: user._id }); */
    const allUsers = async () => {
      try {
        const { data } = await getUser();
        if (data) {
          setAllUser(data);
          console.log(data);
          const { data: me } = await getUserMe();
          dispatch(getUserReducer(me));
        }
      } catch (error) {
        console.log(error);
      }
    };
    allUsers();
  }, []);

  return (
    <Box flex={1} safeArea bgColor={"white"}>
      <Box>
        <IconButton
          onPress={() => logout()}
          icon={<Icon as={AntDesign} name="logout" />}
          borderRadius="full"
          _icon={{
            color: "orange.500",
            size: "md",
          }}
          _hover={{
            bg: "orange.600:alpha.20",
          }}
          _pressed={{
            bg: "orange.600:alpha.20",
            _icon: {
              name: "emoji-flirt",
            },
            _ios: {
              _icon: {
                size: "2xl",
              },
            },
          }}
          _ios={{
            _icon: {
              size: "2xl",
            },
          }}
        />
        <Center>
          <Heading>{user?.name}</Heading>
        </Center>
      </Box>
      <Box my={3}>
        {allUser?.map((item, key) => (
          <Pressable
            onPress={() => navigation.navigate("message", { ID: item._id })}
          >
            <Row
              my={1}
              alignItems={"center"}
              px={1}
              bgColor={"warmGray.100"}
              py={2}
            >
              <Box>
                <Avatar
                  bg="amber.500"
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                  size="lg"
                ></Avatar>
              </Box>
              <Column mx={3}>
                <Box>
                  <Heading size={"sm"}>{item?.name}</Heading>
                </Box>
                <Box>
                  <Text>je vous le donne vraiment</Text>
                </Box>
              </Column>
              <Box>
                <Box bgColor={"green.500"} borderRadius={50} px={2}>
                  <Text color={"white"}>5</Text>
                </Box>
              </Box>
            </Row>
          </Pressable>
        ))}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
