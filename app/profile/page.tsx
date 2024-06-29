import { Profile } from "@/components/profile/Profile";
import { NextPage } from "next";

const page: NextPage = () => {
  return (
    <>
      <Profile name="My" desc="Welcome to your personalized profile page" />
    </>
  );
};

export default page;
