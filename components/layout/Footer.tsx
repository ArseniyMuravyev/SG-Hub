import { footerData } from "@/data";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex justify-between items-center gap-4 px-6 md:px-12 w-full mt-auto">
      <p className="text-white">©SG Hub 2024</p>
      <ul className="flex gap-2 items-center">
        {footerData.map((item) => (
          <li
            key={item.link}
            className="bg-white rounded-full p-4 hover:bg-black hover:text-white transition-colors duration-300 z-10 size-12"
          >
            <a href={item.link} target="_blank">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
