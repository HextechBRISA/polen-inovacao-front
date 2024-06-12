import React from "react";
import InfoCard from "./InfoCard";
import Newsletter from "./NewsLetterCard";

export default function PublicCards() {
  return (
    <div className="w-full h-auto mt-5 flex justify-center items-center">
      <InfoCard />
      <Newsletter />
    </div>
  );
}
