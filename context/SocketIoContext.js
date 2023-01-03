import React, { createContext, useEffect, useState } from "react";

//import { eventSocketConnected } from "../helpers/events";

import io from "socket.io-client";

import { getUserMe } from "../api/user";
import { useSelector } from "react-redux";
export const Context = createContext();

export default function SocketIoContext({ children }) {
  const [socket, setSocket] = useState();

  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  useEffect(() => {
    if (user) {
      const _socket = io("https://2494-41-85-173-26.eu.ngrok.io", {
        query: {
          userId: user._id,
        },
      });

      setSocket(_socket);
    }
  }, [user]);

  return <Context.Provider value={socket}>{children}</Context.Provider>;
}

export const useSocketIo = () => {
  const socket = React.useContext(Context);
  if (socket === undefined) {
    throw new Error("useSocketIo must be used within a socketProvider");
  }
  return socket;
};
