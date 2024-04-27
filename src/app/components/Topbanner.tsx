import styled from "styled-components";
import Banner from "../../../public/Banner.jpg";
import Link from "next/link";

export function TopBanner() {
  return (
    <Top>
      <ImgBanner>
        <Image src={Banner.src} alt="logoheader" />
        <BannerText>
          <h1>Locação de Espaços</h1>
          <Link href={"/location"}>
            <button>Faça seu evento conosco</button>
          </Link>
        </BannerText>
      </ImgBanner>
    </Top>
  );
}

const Top = styled.div`
  background-color: white 20;
`;

const ImgBanner = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 60px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;
