"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoHeader from "../../../public/LogoHeader.png";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export default function Header() {
  const [SSR, setSSR] = useState(false);

  useEffect(() => {
    setSSR(true);
  }, []);

  return (
    SSR && (
      <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#ea5e53] p-5 shadow-md">
        <div className="flex h-8 w-[165px] items-center border-r-2 border-white">
          <Link href={"/"}>
            <Image src={LogoHeader.src} alt="logoheader" width={150} height={30} />
          </Link>
          <div className="h-8 ml-4 w-[2px] bg-white" />
        </div>

        <div className="hidden md:flex text-[18px]">
          <div className="mx-5 flex h-8 items-center text-white hover:animate-wobble">
            <Link href={"/login"}>Sou Pólen</Link>
          </div>
          <div className="h-8 w-[2px] bg-white" />
          <div className="ml-5 mr-2 flex h-8 items-center text-white hover:animate-wobble">
            <Link href={"/newsletter"}>Inscreva-se</Link>
          </div>
        </div>

        <div className="flex items-center pr-0 text-white md:hidden">
          <Link className="mx-1 text-3xl" href={"/login"}>
            <RiAccountPinCircleLine />
          </Link>
          <Link className="mx-1 text-3xl" href={"/newsletter"}>
            <MdOutlineMarkEmailUnread />
          </Link>
        </div>
      </div>
    )
  );
}
