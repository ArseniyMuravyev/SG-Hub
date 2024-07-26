import { FC, ReactNode } from "react";

interface Props {
  link: string;
  className?: string;
  icon?: ReactNode;
}

export const OuterLink: FC<Props> = ({ link, className, icon }) => {
  return (
    <a
      href={link}
      className={`bg-white rounded-full p-4 hover:bg-black hover:text-white transition-colors duration-300 z-10 ${className}`}
      target="_blank"
    >
      {icon}
    </a>
  );
};
