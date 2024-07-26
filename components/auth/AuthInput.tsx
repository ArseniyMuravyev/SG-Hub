import { FormFieldProps } from "@/types";
import { FC } from "react";
import clsx from "clsx";

export const AuthInput: FC<FormFieldProps> = ({
  label,
  id,
  register,
  errors,
  disabled,
}) => (
  <>
    <label htmlFor={id} className="text-white leading-9 block font-medium">
      {label}
    </label>
    <input
      id={id}
      type={id}
      autoComplete={id}
      disabled={disabled}
      {...register(id)}
      className={clsx(
        `w-full border border-1-white text-white rounded-full focus:outline-none focus:ring-0 px-8 py-3 bg-black form-input shadow-sm ring-1 rint-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-400`,
        errors[id] && `focus:ring-rose-500`,
        disabled && `opacity-50 cursor-default`
      )}
    />
    {errors && <span className="text-red">{errors.root?.message}</span>}
  </>
);
