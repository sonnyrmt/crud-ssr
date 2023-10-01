"use client";

import { Controller } from "react-hook-form";
import { EyeClosed, EyeSecurity, ErrorIcon } from "@/icons";
import { useEffect, useState } from "react";
import { Tooltip } from "./utils/tooltip";

export const Input = ({ id, name, control, rules, placeholder, type = "text", errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const inputType = showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target && !event.target.closest(".tooltip-container")) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Controller
      id={id}
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <div className="relative">
          <input
            className={getInputClasses(errors[name])}
            placeholder={placeholder}
            type={inputType}
            onChange={onChange}
            value={value || ""}
          />
          {type === "password" && !errors[name] && (
            <div onClick={togglePasswordVisibility}>{showPassword ? <EyeClosed /> : <EyeSecurity />}</div>
          )}
          <div
            className="absolute right-[15px] top-[17px] cursor-pointer tooltip-container"
            onClick={() => setShowTooltip(!showTooltip)}
          >
            {errors[name] && (
              <div className="relative">
                <ErrorIcon />
                {showTooltip && <Tooltip showTooltip={showTooltip} />}
              </div>
            )}
          </div>
        </div>
      )}
    />
  );
};

const getInputClasses = (hasError) => {
  return `bg-zinc-900/50 z-[10] text-sm placeholder:text-sm w-full my-2 border-[1px] focus:outline-none focus:border-zinc-700 p-2 rounded ${
    hasError ? "border-red-800" : "border-zinc-800"
  }`;
};
