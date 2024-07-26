import { FC, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  icon?: ReactNode;
  leftIcon?: boolean;
  disabled?: boolean;
  onClick: () => void;
  fullWidth?: boolean;
  title?: string;
  className?: string;
}

export const Button: FC<Props> = ({
  icon,
  leftIcon,
  disabled,
  onClick,
  fullWidth = false,
  title,
  className,
}) => {
  return (
    <button
      className={clsx(
        `flex items-center justify-center text-black bg-white flex items-center hover:bg-black hover:text-white transition-colors duration-300 border border-white-1 ${className}`,
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-default"
      )}
      onClick={onClick}
    >
      {leftIcon && icon}
      <p className="uppercase font-light">{title}</p>
      {!leftIcon && icon}
    </button>
  );
};
