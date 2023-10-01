"use client";

import { Controller } from "react-hook-form";
import { EyeClosed, EyeSecurity } from "@/icons";
import { useState } from "react";

export const Input = ({ id, name, control, rules, placeholder, type = "text" }) => {
  const isPasswordType = type === "password";
  const [passwordChange, setPasswordChange] = useState("password");

  return (
    <Controller
      id={id}
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <div className="relative">
          <input
            className="bg-zinc-900/50 z-[10] placeholder:text-sm w-full my-2 border-[1px] focus:outline-none focus:border-zinc-700 border-zinc-800 p-2 rounded"
            placeholder={placeholder}
            type={!isPasswordType ? type : passwordChange}
            onChange={onChange}
            value={value || ""}
          />
          {isPasswordType ? (
            passwordChange === "password" ? (
              <div onClick={() => setPasswordChange("text")}>
                <EyeSecurity />
              </div>
            ) : (
              <div onClick={() => setPasswordChange("password")}>
                <EyeClosed />
              </div>
            )
          ) : undefined}
        </div>
      )}
    />
  );
};
