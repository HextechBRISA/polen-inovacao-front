"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterImage from "../../../../public/NewsletterImage.png";
import Arrow from "../../../../public/Arrow.png";

export default function NewsletterCard() {
  return (
    <Link href="/newsletter">
      <div
        className="
          flex 
          justify-center
          items-center 
          text-[18px]
          text-[white]
          bg-gradient-to-r from-[rgba(255,255,255,0.3)] to-[rgba(234,94,83,1.0)]
          w-50%
          h-[220px]
          rounded-lg 
          shadow-md
          p-6 
          ml-4 mr-4
          animate__animated animate__pulse"
      >
        <div className="w-64 mr-4">
          <h1 className="font-bold text-[#EA5E53] text-20px">
            Inscreva-se em nossa NewsLetter!
          </h1>
          <h2 className="mt-4">
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
            className="w-48"
          />
        </div>
      </div>
    </Link>
  );
}
