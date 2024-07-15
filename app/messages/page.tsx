import { Messages } from "@/components";
// import { baseUrl } from "@/constants";
import { getMessages } from "@/services";
import { Message } from "@/types";
// import { unstable_noStore } from "next/cache";

// export const revalidate = 5;
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch(baseUrl + "/api/messages",{
  //   next: {tags: ['msg']}
  // });
  // const messages: Message[] = await response.json();

  const messages: Message[] = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
