import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest): Promise<NextResponse<{}>> => {
  try {
    const requestSource = req.headers.get("x-id") || "unknown";

    console.log(
      `${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`
    );

    return NextResponse.json([
      { id: 1, text: "Hello World" },
      { id: 2, text: "Another message from the separate backend" },
    ]);
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json({}, { status: 500 });
  }
};
