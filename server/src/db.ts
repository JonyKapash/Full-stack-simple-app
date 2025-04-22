import fs from "fs";
import path from "path";

const messagesPath = path.join(__dirname, "messages.json");

// Initialize messages.json if it doesn't exist
if (!fs.existsSync(messagesPath)) {
  fs.writeFileSync(messagesPath, JSON.stringify([]));
}

export interface Message {
  name: string;
  message: string;
}

export const getAllMessages = (): Message[] => {
  return JSON.parse(fs.readFileSync(messagesPath, "utf-8"));
};

export const addMessage = (message: Message): Message => {
  const messages = getAllMessages();
  messages.push(message);
  fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2));
  return message;
};
