"use client";

import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";
import { useForm } from "react-hook-form";

export const LoginFormulary = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="w-full">
      <Input id={"username"} name={"username"} control={control} placeholder={"Username"} type="text" />
      <Input id={"password"} name={"password"} control={control} placeholder={"Password"} type="password" />
      <Button type="submit" />
    </form>
  );
};
