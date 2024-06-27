import { FriendData } from "@/types";
import { FC } from "react";
import { Modal } from "./Modal";
import Image from "next/image";
import { ProfileModalButton } from "../buttons/ProfileModalButton";

interface Props {
  friend: FriendData;
  onClose: () => void;
}

export const FriendModal: FC<Props> = ({ friend, onClose }) => {
  return (
    <Modal title={friend.name} onClose={onClose}>
      <div className="flex justify-between items-center text-white">
        <div className="flex flex-col gap-4 mt-4 text-lg font-semibold">
          <p>{friend.age} years</p>
          <p>{friend.countOfFriends} friends</p>
          <ProfileModalButton title="Go to Profile" />
        </div>
        <Image
          src={friend.profilePicture}
          alt={friend.name}
          width={150}
          height={150}
          className="object-cover object-center rounded-full"
        />
      </div>
    </Modal>
  );
};
