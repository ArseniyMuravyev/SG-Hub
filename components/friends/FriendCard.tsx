"use client";

import { FriendData } from "@/types";
import { FC, useState } from "react";
import Image from "next/image";
import { FriendModal } from "../modal/FriendModal";

interface Props {
  friend: FriendData;
}

export const FriendCard: FC<Props> = ({ friend }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleOpen = () => setIsShow(true);

  const handleClose = () => setIsShow(false);

  return (
    <>
      <article
        className="flex items-center bg-black px-4 md:px-8 py-2 md:py-4 rounded-xl text-white flex-col justify-center gap-4 border border-white-1 lg:w-1/2 w-full mx-auto cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex gap-4 justify-between items-center w-full">
          <h3 className="text-xl font-bold">{friend.name}</h3>
          <Image
            src={friend.profilePicture}
            alt={friend.name}
            width={50}
            height={50}
            className="object-cover object-center rounded-full"
          />
        </div>
      </article>
      {isShow && <FriendModal friend={friend} onClose={handleClose} />}
    </>
  );
};
