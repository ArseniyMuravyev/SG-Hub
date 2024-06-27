import { LuSparkles } from "react-icons/lu";
import { FC } from "react";
import Link from "next/link";

export const TryNowButton: FC = () => {
  return (
    <Link
      className="text-white p-4 rounded-full flex h-10 justify-center items-center bg-black font-light hover:bg-white hover:text-black transition-colors duration-300 gap-2 border border-white-1"
      href="/login"
    >
      <span>
        <LuSparkles size={16} />
      </span>
      <span className="uppercase">Try Now</span>
    </Link>
  );
};
