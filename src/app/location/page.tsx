"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LocationPage() {
  const [SSR, setSSR] = useState(false);

  useEffect(() => {
    setSSR(true);
  }, []);

  return (
    SSR && (
      <LocationContainer>
        <h1>Escolha o espaço que deseja reservar:</h1>

        <Spaces>
          <Link href={"/payment"}>
            <LocationCard className="hvr-float">
              <Image
                src="https://cdn.pixabay.com/photo/2019/04/23/08/49/movie-4148841_1280.jpg"
                alt="Auditório"
              />
              <h2>Auditório</h2>
            </LocationCard>
          </Link>

          <Link href={"/payment"}>
            <LocationCard className="hvr-float">
              <Image
                src="https://cdn2.hubspot.net/hubfs/6155957/Imported_Blog_Media/2c4844e1ebded52468fc083986fc6c20-1.jpg"
                alt="Studio de TV"
              />
              <h2>Studio de TV</h2>
            </LocationCard>
          </Link>

          <Link href={"/payment"}>
            <LocationCard className="hvr-float">
              <Image
                src="https://avatars.mds.yandex.net/i?id=e54527383f65740aad5a1af3f891846dd7ba093b-10104781-images-thumbs&n=13"
                alt="Studio de Podcast"
              />
              <h2>Studio de Podcast</h2>
            </LocationCard>
          </Link>
        </Spaces>
      </LocationContainer>
    )
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
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 26px;
    color: #635a56;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 930px) {
    width: 80%;
    padding: 40px;
  }
`;

const LocationCard = styled.div`
  width: 220px;
  height: 200px;
  background-color: #ea5e53;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  cursor: pointer;

  &:hover {
    background-color: #e74c3c;
  }

  h2 {
    color: white;
    font-size: 20px;
    margin-top: 10px;
  }

  @media (max-width: 930px) {
    width: 300px;
  }

  @media (max-width: 420px) {
    width: 250px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 10px;
  object-fit: cover;
`;

const Spaces = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;
