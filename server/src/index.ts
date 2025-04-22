import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getAllMessages, addMessage, deleteMessage } from "./dbSql";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/messages", async (_req, res) => {
  try {
    const messages = await getAllMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

app.post("/messages", async (req, res) => {
  try {
    const newMessage = await addMessage(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to add message" });
  }
});

app.delete("/messages/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await deleteMessage(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete message" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
