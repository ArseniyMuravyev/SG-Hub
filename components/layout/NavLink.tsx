import { FC } from "react";
import Link from "next/link";
import { LinkWithIcon } from "@/types";

export const NavLink: FC<LinkWithIcon> = ({ icon, link }) => {
  return (
    <li>
      <Link
        href={`/${link}`}
        className="rounded-3xl py-2 px-4 bg-white flex items-center gap-2 hover:bg-black hover:text-white transition-colors duration-300 border border-white-1"
      >
        {icon}
        <p className="uppercase font-light">{link}</p>
      </Link>
    </li>
  );
};
