"use client"
import React, { ReactNode } from 'react';
import Image from 'next/image';
import LogoPolen from '../../../public/LogoPolen.png';

interface BackgroundFormsProps {
  children?: ReactNode;
}

export default function BackgroundForms({ children }: BackgroundFormsProps) {
  return (
    <div className="bg-white bg-opacity-30 w-1/2 mt-[130px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center sm:w-4/5 xs:w-4/5 text-[#635A56] mb-[50px]">
      <div className="max-w-full flex justify-center mb-1.5">
        <Image src={LogoPolen} alt="Logo Polen" className='object-cover w-[150px] h-auto' />
      </div>
        { children }
    </div>
  );
}
