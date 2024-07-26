import { FriendData } from "@/types";
import { FC } from "react";
import { Modal } from "./Modal";
import Image from "next/image";
import { Button } from "../common/Button";

interface Props {
  friend: FriendData;
  onClose: () => void;
}

export const FriendModal: FC<Props> = ({ friend, onClose }) => {
  return (
    <Modal title={friend.name} onClose={onClose}>
      <div className="flex flex-col gap-16">
        <div className="flex justify-between items-center text-white">
          <div className="flex flex-col gap-4 mt-4 text-lg font-semibold">
            <p>{friend.age} years</p>
            <p>{friend.countOfFriends} friends</p>
          </div>
          <Image
            src={friend.profilePicture}
            alt={friend.name}
            width={150}
            height={150}
            className="object-cover object-center rounded-full"
          />
        </div>
        <Button
          onClick={() => {}}
          title="Go To Profile"
          className="px-4 py-2 rounded-xl"
          fullWidth
        />
      </div>
    </Modal>
  );
};
