import { FC } from "react";
import Link from "next/link";
import { LinkWithIcon } from "@/types";

type Props = LinkWithIcon & {
  className?: string;
};

export const InnerLink: FC<Props> = ({ icon, link, className }) => {
  return (
    <Link
      href={`/${link}`}
      className={`text-black rounded-3xl bg-white flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-300 border border-white-1 ${className}`}
    >
      {icon}
      <p className="uppercase font-light">{link === "" ? "home" : link}</p>
    </Link>
  );
};
