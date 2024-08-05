import Image from "next/image";
import Link from "next/link";
import { BiLogoSpotify } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from "react-icons/io";
import AboutUsImage from "../../../public/AboutUsImage.png";

export default function AboutUs() {
  return (
    <div className="flex sm:flex-col w-full mx-auto items-center justify-center mt-[120px] mb-[50px]">
      <Image
        src={AboutUsImage}
        alt="Pólen"
        className="w-80 mr-16 sm:mr-0 sm:mb-8"
      />
      <div className="bg-[#eadcd3] bg-opacity-50 w-1/2 p-8 sm:w-4/5 xs:w-4/5 flex flex-col shadow-lg rounded-[20px]">
        <h1 className="text-left text-3xl font-bold font-sans mb-4 text-[#EA5E53]">
          QUEM SOMOS?
        </h1>
        <div className="text-[17px] leading-tight text-justify xs:text-left">
          <p className="mb-4">
            O Pólen - Polo de Inovação da UNISUAM - é um hub voltado para
            empreendedores e startups. Aqui contamos com uma equipe de
            profissionais multidisciplinares nacionais e internacionais com o
            objetivo de transformar ideias em negócios rentáveis.
          </p>
          <p className="mb-4">
            Aqui você encontra “O” local perfeito para transformar seus
            projetos. Com a ajuda do nosso time, empreender fica mais simples e
            fácil. Você pode chegar no Pólen com uma ideia, e nós vamos te
            ajudar a sair com um negócio real, rentável e escalável.
          </p>
          <p className="font-semibold mb-6">🚀 #BoraPraCima!</p>
          <h2 className="text-[22px] font-bold font-sans">
            Acompanhe nossas redes sociais:
          </h2>
        </div>
        <div className="flex xs:flex-wrap xs:justify-center mt-5 text-[40px] xs:text-[32px] text-[#EA5E53]">
          <Link
            href="https://open.spotify.com/show/6xXumIawt7MAYyW7o5GjSw?si=5963835338b14750"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoSpotify className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.instagram.com/polen.unisuam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialInstagram className="ml-4 xs:ml-2 cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/polen-unisuam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="ml-4 xs:ml-2 cursor-pointer" />
          </Link>
          <Link
            href="https://wa.me/+5521997680580"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className="ml-4 xs:ml-2 cursor-pointer" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UChWCgAnhhUx_UK_xg48POUQ/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube className="ml-4 xs:ml-2 cursor-pointer" />
          </Link>
          <Link
            href="https://www.facebook.com/poleninovacao/#:~:text=O%20espa%C3%A7o%20P%C3%B3len%20tem%20o,a%20estrutura%20acad%C3%AAmica%20da%20UNISUAM."
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFacebook className="ml-4 xs:ml-2 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
