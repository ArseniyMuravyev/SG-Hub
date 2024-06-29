"use client";

import { useEffect, useState } from "react";
import { Channel as TChannel, StreamChat, User } from "stream-chat";
import { FC } from "react";
import axios from "axios";
import {
  Chat as StreamChatComponent,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;

export const Chat: FC = () => {
  const [user, setUser] = useState<User>({ id: "user-id" });
  const [client, setClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<TChannel | null>(null);

  useEffect(() => {
    (async function run() {
      try {
        const client = StreamChat.getInstance(apiKey);
        setClient(client);

        const response = await axios.post("/api/token", { id: user.id });
        const { token } = response.data;

        await client.connectUser(
          {
            id: user.id,
            name: "User Name",
          },
          token
        );

        const channel = client.channel("messaging", "spacejelly", {
          name: "Awesome channel about traveling",
        });
        setChannel(channel);
      } catch (error) {
        console.error("Error connecting user:", error);
      }
    })();

    return () => {
      client?.disconnectUser();
      setChannel(null);
    };
  }, [user.id]);

  return (
    <div className="flex flex-col bg-gray-100 w-full">
      {client && channel && (
        <StreamChatComponent client={client} theme="str-chat__theme-dark">
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput focus />
            </Window>
          </Channel>
        </StreamChatComponent>
      )}
    </div>
  );
};
