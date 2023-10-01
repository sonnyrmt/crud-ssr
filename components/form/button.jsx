"use client";

export const Button = ({ type }) => {
  return (
    <button
      type={type}
      className="w-full selection:bg-none bg-zinc-900/50 hover:bg-zinc-800/50 my-2 border-[1px] border-zinc-800 hover:border-zinc-700 transition-all p-2 rounded-2xl text-sm text-slate-400"
    >
      Send
    </button>
  );
};
