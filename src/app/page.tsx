"use client";
import React from "react";
import Banner from "../components/Banner";
import PublicCards from "../components/PublicCards";
import { Footer } from "../components/Footer";

export default function MyApp() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Banner />
        <PublicCards />
      </main>
      <Footer />
    </div>
  );
}
