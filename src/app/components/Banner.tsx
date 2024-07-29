import Link from "next/link";
import Image from "next/image";
import BannerImage from "../../../public/BannerImage.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Banner() {
  return (
    <div className="relative overflow-hidden mt-[70px] shadow-custom w-full h-80 xs:h-60 font-sans">
      <Image
        src={BannerImage}
        alt="Pólen Inovação"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center text-white items-start z-10 px-36 sm:px-6">
        <h1 className="text-[#eadcd3] text-2xl md:text-2xl lg:text-4xl xs:text-[20px] font-bold mb-4">
          LOCAÇÃO DE ESPAÇOS
        </h1>
        <p className="mb-4 md:mb-6 lg:mb-8 xs:text-[16px] xs:w-[180px]">
          Conheça nossos espaços e confira nossa agenda!
        </p>
        <Link href="/space-rental">
          <button className="bg-[#ee7a3c] shadow-xl bg-opacity-60 py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center justify-center transition duration-300 hover:bg-opacity-80 hvr-pulse-shrink">
            Faça seu evento conosco
            <IoIosArrowForward className="ml-2 text-xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}
