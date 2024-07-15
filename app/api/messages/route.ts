import { NextRequest, NextResponse } from "next/server";
import { handleError } from "@/lib/utils";
import { Message } from "@/types";

export const GET = async (req: NextRequest) => {
  try {
    const requestSource = req.headers.get("X-ID") || "unknown";

    console.log(
      `${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`
    );

    const messages: Message[] = [
      { id: 1, text: "Hello World" },
      { id: 2, text: "Another message from the separate backend" },
    ];

    return NextResponse.json(messages);
  } catch (error) {
    console.error("[MESSAGES_GET]", error);
    return handleError(error);
  }
};

// import { handleError } from "@/lib/utils";
// import { Message } from "@/types";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest): Promise<NextResponse<Message[]>> {
//   try {
//

// }
