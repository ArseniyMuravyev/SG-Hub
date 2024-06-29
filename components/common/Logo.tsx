import { FC } from "react";
import Link from "next/link";
import { LuShare2 } from "react-icons/lu";
import { lato } from "@/app/fonts";

export const Logo: FC = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <LuShare2 size={34} color="#fff" />
      <p className={`${lato.className} text-4xl font-black text-white`}>
        SG Hub
      </p>
    </Link>
  );
};
