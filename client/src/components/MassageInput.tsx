import { useState } from "react";
import { Message } from "../types/message";
import { addMessage } from "../services/messageService";

interface MessageInputProps {
  onMessageAdded: () => void;
}

const MessageInput = ({ onMessageAdded }: MessageInputProps) => {
  const [message, setMessage] = useState<Omit<Message, "id">>({
    name: "",
    message: "",
  });

  const handleAddMessage = async () => {
    if (message.name && message.message) {
      try {
        await addMessage(message);
        setMessage({ name: "", message: "" }); // Clear the form
        onMessageAdded(); // Notify parent component
      } catch (error) {
        console.error("Error adding message:", error);
      }
    }
  };

  return (
    <div>
      <h3>Add new message</h3>
      <input
        type="text"
        placeholder="Type your name"
        onChange={(e) =>
          setMessage((prev) => ({ ...prev, name: e.target.value }))
        }
        value={message.name}
      />
      <input
        type="text"
        placeholder="Type your message"
        onChange={(e) =>
          setMessage((prev) => ({ ...prev, message: e.target.value }))
        }
        value={message.message}
      />
      <button onClick={handleAddMessage}>Send message</button>
    </div>
  );
};

export default MessageInput;
