import { FC } from "react";
import { NavLinksList } from "./NavLinksList";
import { Logo } from "../common/Logo";
import { SpotlightBackground } from "@/components/home/SpotlightBackground";
import { MenuButtons } from "./MenuButtons";

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center w-full p-8">
      <SpotlightBackground />
      <Logo />
      <NavLinksList />
      <MenuButtons />
    </header>
  );
};
