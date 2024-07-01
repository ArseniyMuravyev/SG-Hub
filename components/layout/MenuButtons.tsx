import { FC } from "react";
import { MenuButton } from "../buttons/MenuButton";
import { TryNowButton } from "../buttons/TryNowButton";

export const MenuButtons: FC = () => {
  return (
    <div className="flex gap-6 items-center">
      <MenuButton />
      <TryNowButton />
    </div>
  );
};
