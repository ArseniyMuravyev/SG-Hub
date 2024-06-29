import { NextRequest, NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY ?? "";
    const apiSecret = process.env.STREAM_API_SECRET ?? "";

    const serverClient = StreamChat.getInstance(apiKey, apiSecret);

    const token = serverClient.createToken(id);

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error generating token:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
