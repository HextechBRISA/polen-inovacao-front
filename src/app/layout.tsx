import type { Metadata } from "next";
import { Alef } from 'next/font/google';
import "../styles/global.css"
import React from "react";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Pólen Inovação"
};

const alef = Alef({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={alef.className}> 
         <Header />
        {children}
        </body>
      </html>
    </>
  );
}