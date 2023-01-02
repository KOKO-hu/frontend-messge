import axios from "axios";
import { API_URL } from "../datas";
import * as SecureStore from "expo-secure-store";
export const getUser = () => {
  return axios.get(`${API_URL}/api/getUser`);
};
export const sendUser = (data) => {
  return axios.post(`${API_URL}/api/signUp`, data);
};
export const sendOfMessage = (data) => {
  return axios.post(`${API_URL}/api/sendMessage`, data);
};
export const listMessage = () => {
  return axios.get(`${API_URL}/api/allMessage`);
};
export const getUserMe = () => {
  return axios.get(`${API_URL}/api/getUserMe`);
};
export const getMessageMe = (expId, desId) => {
  return axios.get(`${API_URL}/api/allMessage/${expId}/destinataire/${desId}`);
};
export const setSecureData = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

/* secure store  */
export const getSecureData = async (key) => {
  let result = await SecureStore.getItemAsync(key);

  return result;
};
export const setAuthHeaders = async (token) => {
  axios.defaults.headers.authorization = `Bearer ${token}`;
  await setSecureData("token", token);
};

export const removeSecureData = async (key) => {
  await SecureStore.deleteItemAsync(key);
};

export const logoutUser = async () => {
  await removeSecureData("token");
  delete axios.defaults.headers.authorization;
  //}
};
