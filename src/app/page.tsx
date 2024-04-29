"use client";
import React, { useEffect, useState } from "react";
import PublicCards from "./components/PublicCards";
import TopBanner from "./components/Topbanner";

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
