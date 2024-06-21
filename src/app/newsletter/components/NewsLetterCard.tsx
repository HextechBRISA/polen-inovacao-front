"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Newsletter() {
  return (
    <div> <Link href="/newsletter">
      <div
        className="
          flex 
          justify 
          items-center 
          text-[25px]
          text-[white]
          bg-[#ea5e53]
          w-[435px] h-[256px]
          border rounded-[8px]
          p-[20px]
          shadow-md animate__animated animate__pulse"
      >
        <div>
          <h1>
            Inscreva-se em nossa NewsLetter!
          </h1>
          <h2 className="mt-5">
            E receba todas as nossas novidades em primeira mão!
          </h2>
          <div className="mt-5">
            <Image
              src="/Arrow.png"
              width={200}
              height={200} alt="seta"
            />
          </div>
        </div>
        <div>
          <Image
            src="/NewsletterImage.png"
            width={295}
            height={295}
            alt="ícone de envelope"
          />
        </div>
      </div>
    </Link>
    </div>
  );
}

