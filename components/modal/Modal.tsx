"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ title, onClose, children }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById("modals"));

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-20"
        onClick={onClose}
      />
      <div className="bg-black border border-white-1 z-50 rounded-xl shadow-lg p-6 w-full max-w-xl relative h-1/3 text-white">
        <h3 className="text-xl font-bold text-center">{title}</h3>
        <button
          className="text-gray-500 hover:text-gray-700 absolute top-[-1.5rem] right-[-1.5rem] text-white"
          type="button"
          onClick={onClose}
        >
          <IoMdClose size={56} />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};
