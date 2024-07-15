import { addMessage } from "@/services";
// import { revalidatePath } from "next/cache";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function NewMessagePage() {
  async function createMessage(formData: FormData) {
    "use server";

    const message = formData.get("message");

    if (typeof message === "string" && message.length > 0) {
      addMessage(message);
      // revalidatePath("/messages");
      revalidateTag("msg");
      redirect("/messages");
    } else {
      console.error("Message is not valid");
      throw new Error("Message is not valid");
    }
  }
  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows={5} />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
