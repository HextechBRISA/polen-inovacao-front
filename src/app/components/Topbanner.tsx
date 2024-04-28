import styled from "styled-components";
import Banner from "../../../public/Banner.png";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function TopBanner() {
  return (
    <BannerContainer>
      <Image src={Banner.src} alt="logoheader" />
      <OverlayEffect />
      <BannerText>
        <h1>LOCAÇÃO DE ESPAÇOS</h1>
        <p>Conheça nossos espaços e confira nossa agenda!</p>
        <Link href={"/location"}>
          <Button className="button hvr-pulse-shrink">
            Faça seu evento conosco 
            <IoIosArrowForward className="arrow" />
          </Button>
        </Link>
      </BannerText>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  margin-top: 70px;
  box-shadow: 0px 4px 8px hsla(0, 0%, 0%, 0.4);
  overflow: hidden;

  @media (max-width: 700px) {
    height: 220px;
  }
`;

const OverlayEffect = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 78, 78, 0.3) 20%,
    rgba(0, 0, 0, 0.6) 80%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const BannerText = styled.div`
  width: 100%;
  padding: 0px 100px;
  position: absolute;
  top: 100px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
    opacity: 0.9;
    text-align: left;
  }

  p {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    padding: 0px 50px;
    top: 50px;

    h1 {	
      font-size: 30px;
    }
    p { 
      font-size: 14px;
    }
  }

  @media (max-width: 500px) {
    padding: 0px 20px;
    top: 120px;

    h1 {	
      font-size: 25px;
    }
    p { 
      display: none;
    }
  }
`;

const Button = styled.div`
  background-color: rgb(234, 94, 83, 0.5);
  width: 300px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.2);
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .arrow {
    font-size: 20px;
    margin-left: 5px;
  }

  @media (max-width: 500px) {
    width: 250px;
    padding: 5px;
    margin-top: 5px;
    font-size: 16px;
  }
`;