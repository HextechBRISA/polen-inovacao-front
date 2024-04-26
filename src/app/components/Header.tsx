"use client"
import Link from "next/link";
import styled from "styled-components";
import LogoHeader from "../../../public/LogoHeader.png"

export default  function Header() {
    return (
        <HeaderContainer>
                <div className="img-card"> 
                    <Image src={LogoHeader.src} alt="logoheader"/>
                </div>
                <nav>
                    <LinkCard>
                    <Link href={'/'}>Início</Link>
                    </LinkCard>
                    <LinkCard>
                    <Link href={'/login'}>Sou Pólen</Link>
                    </LinkCard>
                    <LinkCard  className="link3">
                    <Link href={'/'}>Inscreva-se</Link>  
                    </LinkCard>
                </nav>
        </HeaderContainer>
    )
    
}


const HeaderContainer = styled.div`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .img-card{
        border-right: 1px solid white;
        width: 165px;
    }
    
    nav{
        width: auto;
        display: flex;
    }

    `; 

const Image = styled.img`
    width: 150px;
    `; 
const LinkCard = styled.div`
    color: white;
    font-size: 20px;
    margin: 0px;
    border-right: 1px solid white;
    padding: 5px 15px;
    height: 30px;
    width: auto;
    text-align: center;

    a{
        text-decoration: none;
    }

    .link3{
        border-right: 1px solid red;

    }

    `;
// colocar endereço das outras páginas corretamente
