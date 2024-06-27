import { ReactElement } from "react";
import { Session } from "next-auth";

export type CardData = {
  title: string;
  description: string;
  icon: ReactElement;
};

export type FeatureData = {
  title: string;
  thumbnail: string;
};

export type MenuData = {
  title: string;
};

export type FooterData = {
  link: string;
  icon: ReactElement;
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

export type ProviderName = "google" | "github" | "yandex";

export type ProviderIcon = {
  [key in ProviderName]: ReactElement;
};
