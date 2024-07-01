import { ReactElement } from "react";
import { Session } from "next-auth";

export type CardData = {
  title: string;
  description: string;
  icon: ReactElement;
};

export type MenuData = {
  title: string;
};

export interface FriendData {
  id: string;
  profilePicture: string;
  name: string;
  countOfFriends: number;
  age: number;
}

export type NextAuthSession = Session & {
  user: {
    id: string;
  } & Session["user"];
};

export type ProviderIcons = Record<string, ReactElement>;

export type User = {
  id: string;
  name: string;
  role: string;
};

export type LinkWithIcon = {
  icon: ReactElement;
  link: string;
};
