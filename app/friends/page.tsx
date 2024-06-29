import { FriendsList } from "@/components/friends/FriendsList";
import { NextPage } from "next";

const page: NextPage = () => {
  return (
    <>
      <h1 className="heading mb-4 md:mb-8">Friends</h1>
      <FriendsList />
    </>
  );
};
export default page;
