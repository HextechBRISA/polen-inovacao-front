"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MentorPlaceholder from "../../../../public/Mentor.png";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { axiosInstance } from "../../api/utils/env";
import { User } from "../types";
import { ThreeDots } from "react-loader-spinner";

export default function AllMentorsPage() {
  const [mentors, setMentors] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      const token = JSON.parse(localStorage.getItem("token") ?? "");

      try {
        const result = await axiosInstance.get<User[]>("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const mentors = result.data.filter(
          (user) => user.category === "Mentor"
        );
        setMentors(mentors);
      } catch (error) {
        console.error("Erro ao buscar mentores:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentors();
  }, []);

  const convertByteToUrl = (byteArray: any) => {
    const image = new Uint8Array(byteArray);
    const blob = new Blob([image], { type: "image/jpeg" });
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
  };

  return (
    <>
      <div className="w-3/5 lg:w-4/6 sm:w-5/6 mt-[120px] mx-auto flex justify-between items-center">
        <h1 className="text-[20px] font-bold font-sans">Mentores Pólen</h1>
        <Link href={"/resident"}>
          <FaArrowLeft className="text-[27px] xs:text-[24px] text-shadow-md hover:animate-wobble" />
        </Link>
      </div>

      <div className="bg-[#eadcd3] bg-opacity-50 mt-[30px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 mb-[50px]">
        <h2 className="font-bold text-center text-xl xs:text-[18px]">
          Acesse o perfil do mentor para agendar uma reunião de mentoria:
        </h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ee7a3c"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          </div>
        ) : (
          <div className="w-full h-auto mt-[30px] flex flex-wrap flex-auto justify-center items-center gap-6 xs:flex-col xs:gap-0">
            {mentors.map((mentor) => (
              <Link key={mentor.id} href={`/mentor/${mentor.id}`}>
                <div className="w-40 h-[200px] p-6 bg-[#eadcd3] bg-opacity-70 rounded-2xl mb-6 cursor-pointer flex flex-col justify-center items-center shadow-md hover:bg-opacity-100 transition duration-500 hvr-push">
                  <Image
                    src={
                      convertByteToUrl(mentor.image.data) || MentorPlaceholder
                    }
                    alt={mentor.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full shadow-md object-cover mb-4"
                  />
                  <p className="text-center font-bold">{mentor.name}</p>
                  <div className="w-[115px] flex justify-center items-center font-sans font-semibold mt-3 text-[#ea5e53]">
                    <p className="text-[16px]">visitar perfil</p>
                    <IoIosArrowForward className="text-[14px]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
