"use client";

import { FC, useState, useCallback } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, ValidFieldNames } from "@/types";
import { AuthInput } from "./AuthInput";
import { AuthProviders } from "./AuthProviders";

type Variant = "LOGIN" | "REGISTER";

export const AuthForm: FC = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 justify-center mt-5 w-full md:w-1/2"
      >
        {variant === "REGISTER" && (
          <AuthInput
            label="Name"
            register={register}
            id="name"
            errors={errors}
          />
        )}
        <AuthInput
          label="Email"
          register={register}
          id="email"
          errors={errors}
        />
        <AuthInput
          label="Password"
          register={register}
          id="email"
          errors={errors}
        />

        <button
          type="submit"
          className="text-white bg-black hover:text-black hover:bg-white duration-300 uppercase border border-1-white rounded-full py-3"
        >
          {variant === "LOGIN" ? "Sign In" : "Register"}
        </button>
      </form>
      <AuthProviders />
    </>
  );
};
