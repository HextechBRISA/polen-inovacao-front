"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function LocationPage() {
  const [SSR, setSSR] = useState(false);

  useEffect(() => {
    setSSR(true);
  }, []);

  return (
    SSR && (
      <div className="bg-white bg-opacity-30 w-3/5 mx-auto my-32 p-10 rounded-lg flex flex-col justify-center items-center md:w-4/5">
        <h1 className="font-bold text-xl text-gray-800 text-center mb-8">Escolha o espaço que deseja reservar:</h1>

        <div className="flex justify-center items-center flex-wrap">
          <Link href={"/pages/payment"}>
            <div className="w-56 h-52 bg-red-500 rounded-lg p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-red-600 transition-colors duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2019/04/23/08/49/movie-4148841_1280.jpg"
                alt="Auditório"
                className="w-full h-36 rounded-lg object-cover"
              />
              <h2 className="text-white text-lg mt-2">Auditório</h2>
            </div>
          </Link>

          <Link href={"/pages/payment"}>
            <div className="w-56 h-52 bg-red-500 rounded-lg p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-red-600 transition-colors duration-200">
              <img
                src="https://cdn2.hubspot.net/hubfs/6155957/Imported_Blog_Media/2c4844e1ebded52468fc083986fc6c20-1.jpg"
                alt="Studio de TV"
                className="w-full h-36 rounded-lg object-cover"
              />
              <h2 className="text-white text-lg mt-2">Studio de TV</h2>
            </div>
          </Link>

          <Link href={"/pages/payment"}>
            <div className="w-56 h-52 bg-red-500 rounded-lg p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-red-600 transition-colors duration-200">
              <img
                src="https://avatars.mds.yandex.net/i?id=e54527383f65740aad5a1af3f891846dd7ba093b-10104781-images-thumbs&n=13"
                alt="Studio de Podcast"
                className="w-full h-36 rounded-lg object-cover"
              />
              <h2 className="text-white text-lg mt-2">Studio de Podcast</h2>
            </div>
          </Link>
        </div>
      </div>
    )
  );
}
