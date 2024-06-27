import { FC } from "react";
import { menuData } from "@/data";
import Link from "next/link";

interface Props {}

export const Menu: FC<Props> = () => {
  return (
    <ul className="z-[11] flex flex-col gap-4 bg-black py-4 px-8 absolute top-20 right-[10.75rem] text-white font-light rounded-xl">
      {menuData.map((item) => (
        <li
          key={item.title}
          className="flex items-center justify-center hover:opacity-60 transition-opacity duration-300"
        >
          <Link href={`/${item.title === "home" ? "" : item.title}`}>
            <span className="uppercase  cursor-pointer z-[11] text-center">
              {item.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
