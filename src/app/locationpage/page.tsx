"use client"
import react from "react";
import styled from "styled-components";

export default function LocationPage(){
    return(
        <LocationContainer>
            <h1>Escolha o espaço que deseja reservar:</h1>

        <Spaces>
            <LocationCard>
                <Image src="https://cdn.pixabay.com/photo/2019/04/23/08/49/movie-4148841_1280.jpg"/>
                <h2>Auditório</h2>
            </LocationCard>
            <LocationCard>
                <Image src="https://cdn2.hubspot.net/hubfs/6155957/Imported_Blog_Media/2c4844e1ebded52468fc083986fc6c20-1.jpg"/>
                <h2>Studio de TV</h2>
            </LocationCard>
            <LocationCard>
                <Image src="https://avatars.mds.yandex.net/i?id=e54527383f65740aad5a1af3f891846dd7ba093b-10104781-images-thumbs&n=13"/>
                <h2>Studio de Podcast</h2>
            </LocationCard>
        </Spaces>
        </LocationContainer>
        
    );
}

const LocationContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  margin: 130px auto;
  border-radius: 20px;
  padding: 40px;
  display: flex;
flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 26px;
    color: #635A56;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const LocationCard = styled.div`
    width: 220px;
    height: 200px;
    background-color: #EA5E53;
    border-radius: 20px;
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 5px 0px 5px;
    cursor: pointer;

    h2 {
        color: white;
        font-size: 20px;
        margin-top: 10px;
    }
`;

const Image = styled.img`
    width: 180px;
    height: 150px;
    border-radius: 10px;
`;

const Spaces = styled.div`
    display: flex;
`;