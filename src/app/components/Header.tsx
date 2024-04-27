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
        <LinkLogin>
          <Link href={"/login"}>Sou Pólen</Link>
        </LinkLogin>
        <LinkSubscript>
          <Link href={"/"}>Inscreva-se</Link>
        </LinkSubscript>
      </NavWeb>
      <NavMobile>
        <Link className="icon" href={"/login"}>
          <RiAccountPinCircleLine />
        </Link>
        <Link className="icon" href={"/"}>
          <MdOutlineMarkEmailUnread />
        </Link>
      </NavMobile>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #EA5E53;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  position: fixed;
  top: 0;

  .img-card {
    border-right: 1px solid white;
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
  }
`;

const Image = styled.img`
  width: 150px;
`;

const LinkLogin = styled.div`
  width: auto;
  height: 30px;
  padding-right: 15px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  border-right: 1px solid white;
`;

const LinkSubscript = styled.div`
  width: auto;
  height: 30px;
  padding-left: 15px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
`;

// colocar endereço das outras páginas corretamente
