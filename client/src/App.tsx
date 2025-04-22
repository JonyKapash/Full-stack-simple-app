import { useState, useEffect } from "react";
import "./App.css";
import { MessageList } from "./types/message";
import MassageInput from "./components/MassageInput";
import { deleteMessage, getMessages } from "./services/messageService";

function App() {
  const [messageList, setMessageList] = useState<MessageList>({ messages: [] });

  const fetchMessages = async () => {
    try {
      const messages = await getMessages();
      setMessageList({ messages: messages });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleNewMessage = () => {
    fetchMessages();
  };

  const handleDeleteMessage = async (id: number) => {
    try {
      await deleteMessage(id);
      fetchMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Messages list</h1>
      <div>
        {messageList.messages.map((m) => (
          <div key={m.id}>
            <strong>{m.name}:</strong> {m.message}
            <button onClick={() => handleDeleteMessage(m.id)}>Delete</button>
          </div>
        ))}
      </div>
      <MassageInput onMessageAdded={handleNewMessage} />
    </div>
  );
}

export default App;
