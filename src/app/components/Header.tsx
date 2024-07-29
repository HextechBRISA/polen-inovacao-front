"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { RiAccountPinCircleFill, RiChatSmile2Fill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";
import LogoHeader from "../../../public/LogoHeader.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-[#ee7a3c] to-[#ea5e53] p-5 shadow-md">
      <div className="flex h-8 w-[165px] items-center border-r-2 border-white">
        <Link href={"/"}>
          <Image
            src={LogoHeader.src}
            alt="logoheader"
            width={150}
            height={30}
          />
        </Link>
        <div className="h-8 ml-4 w-[2px] bg-white sm:hidden" />
      </div>

      <div className="hidden md:flex text-[18px]">
        <div className="mx-5 flex h-8 items-center text-white hover:animate-wobble">
          <Link href={"/login"}>Sou Pólen</Link>
        </div>
        <div className="h-8 w-[2px] bg-white" />
        <div className="ml-5 mr-2 flex h-8 items-center text-white hover:animate-wobble">
          <Link href={"/newsletter"}>Newsletter</Link>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <div className="relative inline-block text-left" ref={menuRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          <div
            className={`absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{
              transition: "transform 0.3s ease, opacity 0.3s ease",
              backgroundColor: "#eadcd3",
            }}
          >
            <div className="py-1">
              <Link
                href={"/login"}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
              >
                <RiAccountPinCircleFill className="mr-2 text-[20px] text-[#ee7a3c]" />
                Sou Pólen
              </Link>
              <Link
                href={"/newsletter"}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
              >
                <MdMarkEmailUnread className="mr-2 text-[20px] text-[#ee7a3c]" />
                Newsletter
              </Link>
              <Link
                href={"/"}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
              >
                <FaLightbulb className="mr-2 text-[20px] text-[#ee7a3c]" />
                Saiba Mais
              </Link>
              <Link
                href={"/"}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
              >
                <BiSolidDonateHeart className="mr-2 text-[20px] text-[#ee7a3c]" />
                Favela Inova
              </Link>
              <Link
                href={"/"}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
              >
                <RiChatSmile2Fill className="mr-2 text-[20px] text-[#ee7a3c]" />
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
