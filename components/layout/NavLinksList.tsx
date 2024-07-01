import { FC } from "react";
import { NavLink } from "./NavLink";
import { navLinks } from "@/data";

export const NavLinksList: FC = () => {
  return (
    <ul className="lg:flex lg:items-center lg:gap-8 hidden">
      {navLinks.map((navLink) => (
        <NavLink link={navLink.link} icon={navLink.icon} key={navLink.link} />
      ))}
    </ul>
  );
};
