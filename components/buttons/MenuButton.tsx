"use client";

import { LuMoreHorizontal } from "react-icons/lu";
import { FC, useEffect } from "react";
import { Menu } from "../layout/Menu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const MenuButton: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleOpen = () => setIsShow(true);

  const handleClose = () => setIsShow(false);

  useEffect(() => {
    if (isShow) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isShow]);

  return (
    <>
      <button
        className="text-white p-4 rounded-full lg:hidden relative h-10 justify-center items-center bg-black w-28 font-light hover:bg-white hover:text-black transition-colors duration-300 relative border border-white-1 flex"
        onClick={handleOpen}
      >
        <span className="uppercase absolute left-4 bottom-2">Menu</span>
        <span className="icon-container rounded-full text-black bg-white p-1 h-full absolute right-0 bottom-0 flex justify-center items-center transition-colors duration-300">
          <LuMoreHorizontal size={30} />
        </span>
        <style jsx>{`
          button:hover .icon-container {
            background-color: black;
            color: white;
          }
        `}</style>
      </button>
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute z-[11] top-0 right-0 w-full h-full overflow-hidden"
            onClick={handleClose}
          >
            <Menu />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
