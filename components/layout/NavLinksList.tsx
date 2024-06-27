import { FC } from "react";
import { LuUsers2, LuHeart, LuBookmark } from "react-icons/lu";
import { NavLink } from "./NavLink";

const navLinks = [
  {
    icon: <LuUsers2 size={20} />,
    link: "friends",
  },
  {
    icon: <LuHeart size={20} />,
    link: "liked",
  },
  {
    icon: <LuBookmark size={20} />,
    link: "saved",
  },
];

export const NavLinksList: FC = () => {
  return (
    <div className="flex items-center gap-8">
      {navLinks.map((navLink) => (
        <NavLink link={navLink.link} icon={navLink.icon} key={navLink.link} />
      ))}
    </div>
  );
};
