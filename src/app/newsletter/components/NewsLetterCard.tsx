"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterImage from "../../../../public/NewsletterImage.png";
import Arrow from "../../../../public/Arrow.png";

export default function NewsletterCard() {
  return (
    <div
      className="
          flex 
          justify-center
          items-center 
          text-[18px]
          bg-[#eadcd3] bg-opacity-50
          w-[50%]
          sm:w-[100%]
          h-[220px]
          rounded-lg 
          shadow-md
          p-6 
          ml-4 sm:ml-0
          animate__animated animate__pulse"
    >
      <Link className="flex justify-content items-center" href="/newsletter">
        <div className="w-64 mr-4">
          <h1 className="font-bold text-[22px] xs:text-[18px] text-[#ee7a3c]">
            Inscreva-se em nossa NewsLetter!
          </h1>
          <h2 className="mt-4 xs:text-[15px]">
            E receba todas as nossas novidades em primeira mão!
            <br />
            #SejaPólen
          </h2>
          <div className="mt-4">
            <Image src={Arrow} alt="Arrow" className="w-32" />
          </div>
        </div>
        <div>
          <Image
            src={NewsletterImage}
            alt="Newsletter Image"
            className="w-48 mb-2"
          />
        </div>
      </Link>
    </div>
  );
}
