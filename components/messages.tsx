import { Message } from "@/types";

interface Props {
  messages: Message[];
}

export const Messages = ({ messages }: Props) => {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
};
