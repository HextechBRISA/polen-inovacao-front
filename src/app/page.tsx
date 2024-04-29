"use client";
import React, { useEffect, useState } from "react";
import TopBanner from "./components/TopBanner";
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
