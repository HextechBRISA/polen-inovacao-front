"use client";
import Link from "next/link";
import styled from "styled-components";
import LogoHeader from "../../../public/LogoHeader.png";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="img-card">
        <Link href={"/"}>
          <Image src={LogoHeader.src} alt="logoheader" />
        </Link>
      </div>

      <NavWeb>
        <LinkCard className="hvr-wobble-horizontal">
          <Link href={"/pages/login"}>Sou Pólen</Link>
        </LinkCard>
        <Line />
        <LinkCard className="hvr-wobble-horizontal">
          <Link href={"/pages/newsletter"}>Inscreva-se</Link>
        </LinkCard>
      </NavWeb>

      <NavMobile>
        <Link className="icon" href={"/pages/login"}>
          <RiAccountPinCircleLine />
        </Link>
        <Link className="icon" href={"/pages/newsletter"}>
          <MdOutlineMarkEmailUnread />
        </Link>
      </NavMobile>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #EA5E53;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 20px 20px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  position: fixed;
  top: 0;

  .img-card {
    border-right: 2px solid white;
    width: 165px;
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

const NavWeb = styled.div`
  width: auto;
  display: flex;

  @media (max-width: 500px) {
    display: none;
  }
`;

const NavMobile = styled.div`
  display: none;
  color: white;
  font-size: 35px;

  .icon {
    margin: 0px 5px;
  }

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    padding-right: 15px;
  }
`;

const Image = styled.img`
  width: 150px;
`;

const LinkCard = styled.div`
  width: auto;
  height: 30px;
  margin: 0px 20px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Line = styled.div`
  width: 2px;
  height: 30px;
  background-color: white;
`;
