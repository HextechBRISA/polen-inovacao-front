import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function AllMentorsPage() {
  return (
    <>
      <div className="w-3/5 lg:w-4/6 xs:w-5/6 mt-[130px] mx-auto flex justify-between items-center">
        <h1>Conheça os mentores Pólen:</h1>
        <FaArrowLeft />
      </div>
      <div className="bg-white bg-opacity-30 mt-[30px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 xs:w-5/6"></div>
    </>
  );
}
