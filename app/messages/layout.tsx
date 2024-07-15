import { ReactNode } from "react";
// import { baseUrl } from "@/constants";
import { Message } from "@/types";
import { getMessages } from "@/services";

export default async function MessagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const response = await fetch(baseUrl + "/api/messages");
  // const messages: Message[] = await response.json();
  const messages: Message[] = await getMessages();
  const totalMessages: number = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
