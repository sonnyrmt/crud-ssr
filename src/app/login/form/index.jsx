"use client";

import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";
import { useForm } from "react-hook-form";

export const LoginFormulary = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const submit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="w-full">
      <Input
        id={"username"}
        name={"username"}
        control={control}
        placeholder={"Username"}
        errors={errors}
        type="text"
        rules={{ required: true }}
      />
      <Input
        id={"password"}
        name={"password"}
        control={control}
        placeholder={"Password"}
        errors={errors}
        type="password"
        rules={{ required: true }}
      />
      <Button type="submit" />
    </form>
  );
};
