export interface Message {
  id: number; 
  name: string;
  message: string;
}

export interface MessageList {
  messages: Message[];
}
