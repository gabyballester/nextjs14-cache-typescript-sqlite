import { cache } from "react";
import { unstable_cache as nextCache } from "next/cache";
import { Message } from "@/types";
import sql from "better-sqlite3";

const db = new sql("messages.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message: string) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}

export const getMessages = nextCache(
  cache(async function getMessages(): Promise<Message[]> {
    try {
      console.log("Fetching messages from db");
      const messages = db.prepare("SELECT * FROM messages").all() as Message[];
      return messages;
    } catch (error) {
      console.error("Error fetching messages:", error);
      throw error;
    }
  }),
  ["messages"],
  { tags: ["msg"] }
);
