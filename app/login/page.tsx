"use client";

import { NextAuthSession } from "@/types";
import { useSession } from "next-auth/react";
import { SignIn } from "@/components/login/SignIn";
import { SignOut } from "@/components/login/SignOut";
import { NextPage } from "next";

const page: NextPage = () => {
  const session = useSession().data as NextAuthSession | null;

  return <>{session?.user ? <SignOut /> : <SignIn />}</>;
};

export default page;
