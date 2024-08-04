import Image from 'next/image';
import Link from 'next/link';
import { BiLogoSpotify } from 'react-icons/bi';
import { TiSocialInstagram } from 'react-icons/ti';
import { IoLogoLinkedin, IoLogoYoutube,IoLogoFacebook,IoLogoWhatsapp } from 'react-icons/io';
import DevEnvironment from "../../../public/DevEnvironment.png"

export default function WhoWeWare() {
  return (
    <div className="bg-[#eadcd3] bg-opacity-50 mt-[120px] mx-auto rounded-[20px] p-10 sm:p-6 shadow-lg flex flex-col items-center justify-center w-full lg:w-4/6 md:w-5/6 sm:w-11/12 mb-[50px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="mt-6 w-full lg:w-auto">
          <Image src={DevEnvironment} alt="Development workshops" layout="responsive" />
        </div>
        <div className="lg:ml-6 w-full lg:w-3/4 text-xl mt-4 lg:mt-0">
          <h1 className="text-[25px] xs:text-[22px] font-sans font-bold text-left mb-6 text-[#EA5E53]">
            QUEM SOMOS
          </h1>
          <h2 className="text-[22px] xs:text-[20px] text-left mb-8">
            O Pólen - Polo de Inovação da UNISUAM é um hub voltado para empreendedores e startups. Aqui contamos com uma equipe de profissionais multidisciplinares nacionais e internacionais com o objetivo de transformar ideias em negócios rentáveis.
          </h2>
          <div className="flex justify-center lg:justify-start text-[#EA5E53]">
            <Link href="https://open.spotify.com/show/6xXumIawt7MAYyW7o5GjSw?si=5963835338b14750" target="_blank" rel="noopener noreferrer">
              <BiLogoSpotify className="text-[50px] cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/polen.unisuam/" target="_blank" rel="noopener noreferrer">
              <TiSocialInstagram className="text-[50px] ml-3 xs:ml-2 cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/company/polen-unisuam/" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin className="text-[50px] ml-3 xs:ml-2 cursor-pointer" />
            </Link>
            <Link href="https://wa.me/+5521997680580" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="text-[50px] ml-3 xs:ml-2 cursor-pointer" />
            </Link>
            <Link href="https://www.youtube.com/channel/UChWCgAnhhUx_UK_xg48POUQ/featured" target="_blank" rel="noopener noreferrer">
              <IoLogoYoutube className="text-[50px] ml-3 xs:ml-2 cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com/poleninovacao/#:~:text=O%20espa%C3%A7o%20P%C3%B3len%20tem%20o,a%20estrutura%20acad%C3%AAmica%20da%20UNISUAM." target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook className="text-[50px] ml-3 xs:ml-2 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
