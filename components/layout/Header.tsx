import { FC } from "react";
import { NavLinksList } from "./NavLinksList";
import { Logo } from "../common/Logo";
import { MenuButton } from "../buttons/MenuButton";
import { TryNowButton } from "../buttons/TryNowButton";
import { SpotlightBackground } from "@/components/home/SpotlightBackground";

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center w-full p-8">
      <SpotlightBackground />
      <Logo />
      <NavLinksList />
      <div className="flex gap-6 items-center">
        <MenuButton />
        <TryNowButton />
      </div>
    </header>
  );
};
