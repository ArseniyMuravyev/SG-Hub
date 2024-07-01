"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { NextAuthSession } from "@/types";
import { DeleteAccountButton } from "@/components/buttons/DeleteAccountButton";
import { SignOutButton } from "@/components/buttons/SignOutButton";

export const SignOut: FC = () => {
  const session = useSession().data as NextAuthSession | null;

  return (
    <>
      <h1 className="heading">Sign Out</h1>
      <div className="flex gap-3 md:gap-5 z-20">
        <SignOutButton />
        <DeleteAccountButton />
        <Link href="/profile">
          <Image
            src={session?.user.image ?? ""}
            alt="profile"
            width={37}
            height={37}
            className="rounded-full"
          />
        </Link>
      </div>
    </>
  );
};
