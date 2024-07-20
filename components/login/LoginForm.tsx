"use client";

import { FC } from "react";
import { NextAuthSession } from "@/types";
import { useSession } from "next-auth/react";
import { SignIn } from "@/components/login/SignIn";
import { SignOut } from "@/components/login/SignOut";

export const LoginForm: FC = () => {
  const session = useSession().data as NextAuthSession | null;

  return <>{session?.user ? <SignOut /> : <SignIn />}</>;
};
