import { Messages } from "@/components";
import { baseUrl } from "@/constants";
import { Message } from "@/types";

export default async function MessagesPage() {
  const response = await fetch(baseUrl + "/api/messages", {
    headers: {
      "X-ID": "page",
    },
  });

  const messages: Message[] = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
