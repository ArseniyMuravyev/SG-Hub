import { FriendsList } from "@/components/friends/FriendsList";
import { FC } from "react";

const page: FC = () => {
  return (
    <>
      <h1 className="heading mb-4 md:mb-8">Friends</h1>
      <FriendsList />
    </>
  );
};
export default page;
