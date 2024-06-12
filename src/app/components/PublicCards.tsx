import React from "react";
import InfoCard from "./InfoCard";
import Newsletter from "./NewsLetterCard";

export default function PublicCards() {
  return (
    <div className="w-full h-auto mt-5 flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0">
      <InfoCard />
      <Newsletter />
    </div>
  );
}
