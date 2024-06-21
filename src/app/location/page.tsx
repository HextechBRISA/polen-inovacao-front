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
      <div className="bg-white bg-opacity-30 w-3/5 mx-auto mt-32 rounded-2xl p-10 flex flex-col justify-center items-center lg:w-4/5 sm:w-4/5 sm:p-10">
        <h1 className="font-bold text-2xl text-gray-700 text-center mb-8">
          Escolha o espaço que deseja reservar:
        </h1>

        <div className="w-full flex justify-center items-center lg:flex-nowrap lg:space-x-4 sm:flex-wrap">
          <Link href={"/pages/payment"}>
            <div className="w-56 h-48 bg-red-500 rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-red-600 sm:w-64">
              <img
                className="w-full h-36 rounded-md object-cover"
                src="https://cdn.pixabay.com/photo/2019/04/23/08/49/movie-4148841_1280.jpg"
                alt="Auditório"
              />
              <h2 className="text-white text-xl mt-2">Auditório</h2>
            </div>
          </Link>

          <Link href={"/pages/payment"}>
            <div className="w-56 h-48 bg-red-500 rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-red-600 sm:w-64">
              <img
                className="w-full h-36 rounded-md object-cover"
                src="https://cdn2.hubspot.net/hubfs/6155957/Imported_Blog_Media/2c4844e1ebded52468fc083986fc6c20-1.jpg"
                alt="Studio de TV"
              />
              <h2 className="text-white text-xl mt-2">Studio de TV</h2>
            </div>
          </Link>

          <Link href={"/pages/payment"}>
            <div className="w-56 h-48 bg-red-500 rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-red-600 sm:w-64">
              <img
                className="w-full h-36 rounded-md object-cover"
                src="https://avatars.mds.yandex.net/i?id=e54527383f65740aad5a1af3f891846dd7ba093b-10104781-images-thumbs&n=13"
                alt="Studio de Podcast"
              />
              <h2 className="text-white text-xl mt-2">Studio de Podcast</h2>
            </div>
          </Link>
        </div>
      </div>
    )
  );
}
