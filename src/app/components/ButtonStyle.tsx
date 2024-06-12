import React from "react";

export default function ButtonStyle({ children }) {
  return (
    <button className="w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[20px] my-2">
      {children}
    </button>
  );
}
