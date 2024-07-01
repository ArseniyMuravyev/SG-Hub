import { FC } from "react";
import { menuData } from "@/data";
import Link from "next/link";

export const Menu: FC = () => {
  return (
    <ul className="z-[11] flex flex-col gap-4 bg-black absolute top-0 right-0 text-white text-lg font-light rounded-xl w-full h-full justify-center items-center">
      {menuData.map((item) => (
        <li
          key={item.title}
          className="flex items-center justify-center hover:opacity-60 transition-opacity duration-300"
        >
          <Link href={`/${item.title}`}>
            <span className="uppercase cursor-pointer z-[11] text-center">
              {item.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
