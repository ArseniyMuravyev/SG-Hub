import { FC } from "react";
import { navLinks } from "@/data";
import { InnerLink } from "../common/InnerLink";

export const NavLinksList: FC = () => {
  return (
    <ul className="lg:flex lg:items-center lg:gap-8 hidden">
      {navLinks.map((navLink) => (
        <li key={navLink.link}>
          <InnerLink
            link={navLink.link}
            icon={navLink.icon}
            className="py-2 px-4"
          />
        </li>
      ))}
    </ul>
  );
};
