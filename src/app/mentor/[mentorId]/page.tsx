"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mentor from "../../../../public/Mentor.png";
import { FaRegHeart, FaHeart, FaArrowLeft } from "react-icons/fa";
import MentorCalendar from "../components/MentorCalendar";
import { axiosInstance } from "../../api/utils/env";
import { User } from "../types";
import { Hourglass } from "react-loader-spinner";

export default function MentorProfilePage({ params }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function toggleFavorite() {
    setIsFavorited(!isFavorited);
  }

  useEffect(() => {
    const fetchMentor = async () => {
      const token = JSON.parse(localStorage.getItem("token") ?? "");

      try {
        if (params) {
          const result = await axiosInstance.get<User>(
            `/api/user/${params.mentorId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(result.data);
        }
      } catch (error) {
        console.error("Erro ao buscar mentor:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentor();
  }, [params]);

  const convertByteToUrl = (byteArray: any) => {
    const image = new Uint8Array(byteArray);
    const blob = new Blob([image], { type: "image/jpeg" });
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-64 mt-20">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#ee7a3c", "#f39969"]}
          />
        </div>
      ) : (
        <>
          <div className="w-3/5 lg:w-4/6 sm:w-5/6 mt-[120px] mx-auto flex justify-between items-center xs:h-44">
            <div className="w-auto h-auto flex items-center sm:flex-col sm:items-start">
              <div className="w-20 h-20 rounded-full shadow-md overflow-hidden object-cover">
                <Image
                  src={convertByteToUrl(user?.image.data) || Mentor}
                  alt="Mentor Image"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-auto flex flex-col pl-4 sm:pl-0">
                <h1 className="text-[20px] text-shadow-md font-semibold font-sans mb-3 sm:mt-3 capitalize">
                  {user?.name}
                </h1>
                <div className="text-sm h-auto flex flex-col items-start">
                  <h2 className="font-bold mr-2">Área:</h2>
                  <h2>{user?.course}</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
              {isFavorited ? (
                <FaHeart
                  className="text-[25px] xs:text-[22px] text-shadow-md text-red-500 cursor-pointer mb-4"
                  onClick={toggleFavorite}
                />
              ) : (
                <FaRegHeart
                  className="text-[25px] xs:text-[22px] text-shadow-md cursor-pointer mb-4"
                  onClick={toggleFavorite}
                />
              )}
              <Link href={"/resident"}>
                <FaArrowLeft className="text-[25px] xs:text-[22px] text-shadow-md hover:animate-wobble" />
              </Link>
            </div>
          </div>
          <div className="bg-[#eadcd3] bg-opacity-50 mt-[30px] xs:mt-3 mx-auto rounded-[20px] p-10 xs:p-6 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 mb-[50px]">
            <MentorCalendar isMentor={false} />
          </div>
        </>
      )}
    </>
  );
}
