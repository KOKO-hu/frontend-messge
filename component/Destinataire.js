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
export const Destinataire =()=>{
    return(
        <Box mt={4}>
        <Row justifyContent={"flex-end"}>
          <Box maxW={"70%"} bgColor={"#5B5B5B"} p={1} borderRadius={10}>
            <Text color={"white"}>bonjour cava ?</Text>
          </Box>
          <Box mx={1}>
            <Avatar
              bg="cyan.500"
              source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
              size={"sm"}
            >
              TE
            </Avatar>
          </Box>
        </Row>
      </Box>
    )
}