import { FC } from "react";
import { deleteUser } from "@/utils/user";
import { signOut, useSession } from "next-auth/react";
import { NextAuthSession } from "@/types";

export const DeleteAccountButton: FC = () => {
  const session = useSession().data as NextAuthSession | null;
  const handleDelete = () => {
    if (session?.user?.id) {
      deleteUser(session?.user?.id);
      signOut();
    }
  };

  return (
    <button type="button" className="text-white text-lg" onClick={handleDelete}>
      Delete Account
    </button>
  );
};
