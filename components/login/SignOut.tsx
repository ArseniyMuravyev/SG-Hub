import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { NextAuthSession } from "@/types";
import { deleteUser } from "@/utils/user";

export const SignOut: FC = () => {
  const session = useSession().data as NextAuthSession | null;

  const handleDelete = () => {
    if (session?.user?.id) {
      deleteUser(session?.user?.id);
      signOut();
    }
  };
  return (
    <>
      <h1 className="heading">Sign Out</h1>
      <div className="flex gap-3 md:gap-5 z-20">
        <button
          type="button"
          className="text-white text-lg"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        <button
          type="button"
          className="text-white text-lg"
          onClick={handleDelete}
        >
          Delete Account
        </button>

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
