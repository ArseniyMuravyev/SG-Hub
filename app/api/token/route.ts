import { NextRequest, NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

export async function POST(req: NextRequest) {
  try {
    const { id, name } = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
    const apiSecret = process.env.STREAM_API_SECRET as string;

    const serverClient = StreamChat.getInstance(apiKey, apiSecret);

    await serverClient.upsertUser({
      id,
      name,
    });

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
