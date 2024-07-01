import { FC } from "react";
import { friendsData } from "@/data";
import { FriendCard } from "./FriendCard";

export const FriendsList: FC = () => {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {friendsData.map((friend) => (
        <FriendCard friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
