"use client";
import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import TopBanner from "./components/Topbanner";
import PublicCards from "./components/PublicCards";

export default function MyApp() {
  const [SSR, setSSR] = useState(false);

  useEffect(() => {
    setSSR(true);
  }, []);

  return (
    SSR && (
      <>
        <TopBanner />
        <PublicCards />
      </>
    )
  );
}
