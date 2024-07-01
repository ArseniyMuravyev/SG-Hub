import { FC } from "react";
import { signOut } from "next-auth/react";

export const SignOutButton: FC = () => {
  const handleSignOut = () => signOut();
  return (
    <button
      type="button"
      className="text-white text-lg"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
};
