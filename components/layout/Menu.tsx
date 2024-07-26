import { FC } from "react";
import { menuData } from "@/data";
import { InnerLink } from "../common/InnerLink";

export const Menu: FC = () => {
  return (
    <ul className="z-[11] flex flex-col gap-8 bg-black absolute top-0 right-0 text-white text-lg font-light rounded-xl w-full h-full justify-center items-center">
      {menuData.map((item) => (
        <li
          key={item.title}
          className="flex items-center justify-center hover:opacity-60 transition-opacity duration-300 w-full"
        >
          <InnerLink link={item.title} className="w-1/3 px-4 py-2" />
        </li>
      ))}
    </ul>
  );
};
