import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = <T extends Record<string, any>>(
  error: unknown
): NextResponse<T> => {
  let errorMessage = "Internal error";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  return new NextResponse(`Internal error: ${errorMessage}`, {
    status: 500,
  });
};
