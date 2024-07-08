import React from "react";
import InfoCard from "./InfoCard";
import Newsletter from "../newsletter/components/NewsLetterCard";
import EventCarousel from "../components/EventCarousel";

export default function PublicCards() {
  return (
    <div>
      <div className="w-[80%] sm:w-[90%] h-auto mt-10 flex sm:flex-col mx-auto justify-between items-center xs:mt-6">
      <InfoCard />
      <Newsletter />
    </div>
    <div className="w-full h-auto flex flex-col justify-center items-center mt-[50px] xs:mt-[30px]">
      <h2 className="w-[80%] sm:w-[90%] text-left mb-6 text-white font-bold text-[25px] xs:text-[20px] font-sans">PRÓXIMOS EVENTOS PÓLEN:</h2>
      <EventCarousel />
    </div>
    </div>
  );
}
