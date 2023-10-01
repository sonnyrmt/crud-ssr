"use client";

import { useEffect, useState } from "react";

export const Button = ({ type }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const button = document.querySelector(".custom-button");

    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup", handleMouseUp);

    return () => {
      button.removeEventListener("mousedown", handleMouseDown);
      button.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const buttonClasses = `w-full ${
    isMouseDown ? "bg-zinc-700/50" : "bg-zinc-800/50 hover:bg-zinc-800/50"
  } selection:bg-none bg-zinc-900/50 my-2 border-[1px] border-zinc-800 hover:border-zinc-700 transition-all p-2 rounded-2xl text-sm text-slate-400 custom-button`;

  return (
    <button type={type} className={buttonClasses}>
      Send
    </button>
  );
};
