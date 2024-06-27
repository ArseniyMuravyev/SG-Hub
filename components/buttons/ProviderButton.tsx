import { FC } from "react";
import { providerIcons } from "@/data";

interface Props {
  providerId: string;
  onClick: () => void;
}

export const ProviderButton: FC<Props> = ({ providerId, onClick }) => {
  return (
    <button
      type="button"
      className="bg-white rounded-full p-4 hover:bg-black hover:text-white transition-colors duration-300 z-10"
      onClick={onClick}
    >
      {providerIcons[providerId]}
    </button>
  );
};
