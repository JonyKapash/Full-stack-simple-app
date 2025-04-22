import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export interface Message {
  name: string;
  message: string;
}

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

export const getAllMessages = async (): Promise<Message[]> => {
  try {
    const result = await pool.query(
      "SELECT id, sender_name as name, content as message FROM messaging.message ORDER BY created_at DESC"
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const addMessage = async (message: Message): Promise<Message> => {
  try {
    const result = await pool.query(
      "INSERT INTO messaging.message (sender_name, content) VALUES ($1, $2) RETURNING *",
      [message.name, message.message]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error adding message:", error);
    throw error;
  }
};

export const deleteMessage = async (id: number): Promise<void> => {
  try {
    await pool.query("DELETE FROM messaging.message WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error deleting message:", error);
    throw error;
  }
};
