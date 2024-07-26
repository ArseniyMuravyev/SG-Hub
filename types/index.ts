import { ReactElement } from "react";
import { Session } from "next-auth";
import { z, ZodType } from "zod";
import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
};

export type FormFieldProps = {
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
};

export type ValidFieldNames = "email" | "password" | "name";

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
  icon?: ReactElement;
  link: string;
};

export const UserSchema: ZodType<FormData> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});
