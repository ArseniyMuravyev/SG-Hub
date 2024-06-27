import { FC } from "react";

interface IProfile {
  name: string;
  desc: string;
}

export const Profile: FC<IProfile> = ({ name, desc }) => {
  return (
    <section className="w-full">
      <h1 className="text-left">
        <span className="">{name} Profile</span>
      </h1>
      <p className="text-left">{desc}</p>
    </section>
  );
};
