"use client"
import React from 'react';
import { TopBanner } from '../app/components/TopBanner';
import PublicCards from './components/PublicCards';

export default function MyApp() {
  return (
    <>
      <TopBanner/>
      <PublicCards/>
    </>  
  );
}