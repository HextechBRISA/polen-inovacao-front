"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import {
  RiAccountPinCircleFill,
  RiChatSmile2Fill,
  RiLogoutCircleRFill,
} from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";
import LogoHeader from "../../public/LogoHeader.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCategory, setUserCategory] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const updateAuthStatus = () => {
      const token = localStorage.getItem("token");
      const category = localStorage.getItem("category");

      if (token && category) {
        setIsLoggedIn(true);
        setUserCategory(category);
      } else {
        setIsLoggedIn(false);
        setUserCategory(null);
      }
    };

    updateAuthStatus();

    window.addEventListener("storage", updateAuthStatus);

    return () => {
      window.removeEventListener("storage", updateAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("category");
    setIsLoggedIn(false);
    setUserCategory(null);
    router.push("/login");
  };

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
          <Image src={LogoHeader} alt="logoheader" width={150} height={30} />
        </Link>
      </div>

      <div className="hidden md:flex text-[18px]">
        {isLoggedIn ? (
          <>
            <div className="mx-5 flex h-8 items-center text-white hover:animate-wobble">
              <Link href={userCategory === "Mentor" ? "/mentor" : "/resident"}>
                Minha Conta
              </Link>
            </div>
            <div className="h-8 w-[2px] bg-white" />
            <div className="ml-5 flex h-8 items-center text-white hover:animate-wobble">
              <button onClick={handleLogout}>Sair da Conta</button>
            </div>
          </>
        ) : (
          <>
            <div className="mx-5 flex h-8 items-center text-white hover:animate-wobble">
              <Link href={"/login"}>Sou Pólen</Link>
            </div>
            <div className="h-8 w-[2px] bg-white" />
            <div className="ml-5 flex h-8 items-center text-white hover:animate-wobble">
              <Link href={"/newsletter"}>Newsletter</Link>
            </div>
          </>
        )}
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
              {isLoggedIn ? (
                <>
                  <Link
                    href={userCategory === "Mentor" ? "/mentor" : "/resident"}
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
                  >
                    <RiAccountPinCircleFill className="mr-2 text-[20px] text-[#ee7a3c]" />
                    Minha Conta
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
                  >
                    <RiLogoutCircleRFill className="mr-2 text-[20px] text-[#ee7a3c]" />
                    Sair da Conta
                  </button>
                </>
              ) : (
                <Link
                  href={"/login"}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
                >
                  <RiAccountPinCircleFill className="mr-2 text-[20px] text-[#ee7a3c]" />
                  Sou Pólen
                </Link>
              )}
              <Link
                href={"/newsletter"}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
              >
                <MdMarkEmailUnread className="mr-2 text-[20px] text-[#ee7a3c]" />
                Newsletter
              </Link>
              <Link
                href={"/about-us"}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
              >
                <BiSolidDonateHeart className="mr-2 text-[20px] text-[#ee7a3c]" />
                Sobre Nós
              </Link>
              <Link
                href={"/products"}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-gray-700 flex items-center font-bold"
              >
                <FaLightbulb className="mr-2 text-[20px] text-[#ee7a3c]" />
                Produtos
              </Link>
              <Link
                href={"/contact"}
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
