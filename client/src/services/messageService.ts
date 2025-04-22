import axios from "axios";
import { Message } from "../types/message";

const baseURL = "http://localhost:5001/messages";

export const getMessages = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const addMessage = async (message: Omit<Message, "id">) => {
  try {
    const response = await axios.post(baseURL, message);
    return response.data;
  } catch (error) {
    console.error("Error adding message:", error);
    throw error;
  }
};

export const deleteMessage = async (id: number) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting message:", error);
    throw error;
  }
};
