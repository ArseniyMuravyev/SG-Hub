import { footerData } from "@/data";
import { FC } from "react";
import { OuterLink } from "../common/OuterLink";

export const Footer: FC = () => {
  return (
    <footer className="flex justify-between items-center gap-4 px-6 md:px-12 w-full mt-auto">
      <p className="text-white">©SG Hub 2024</p>
      <ul className="flex gap-2 items-center">
        {footerData.map((item) => (
          <OuterLink
            key={item.link}
            link={item.link}
            icon={item.icon}
            className="size-12"
          />
        ))}
      </ul>
    </footer>
  );
};
