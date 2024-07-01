import { FC } from "react";

interface Props {
  name: string;
  desc: string;
}

export const Profile: FC<Props> = ({ name, desc }) => {
  return (
    <section className="section">
      <h1 className="text-left">
        <span className="">{name} Profile</span>
      </h1>
      <p className="text-left">{desc}</p>
    </section>
  );
};
